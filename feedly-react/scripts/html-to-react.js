/**
 * HTML-to-React conversion script
 *
 * Usage (from repo root):
 *   node scripts/html-to-react.js <path-to-saved.html> [output-name] [--lines=START,END]
 *
 * Writes each page into its own folder under src/pages/<output-name>/:
 *   styles.css   - extracted <style> blocks
 *   pageHtml.js  - HTML string export for dangerouslySetInnerHTML
 *   Page.jsx     - component that imports styles + pageHtml and renders
 *   index.js     - re-exports Page
 *
 * Assets go to public/assets/ with prefix (e.g. homepage-0.png, market-intel-0.png).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
let htmlPath, outputName, lineRange;
for (const a of args) {
  if (a.startsWith('--lines=')) {
    lineRange = a.slice(8).split(',').map(Number);
  } else if (!htmlPath) {
    htmlPath = a;
  } else {
    outputName = a;
  }
}
outputName = outputName || 'homepage';

if (!htmlPath || !fs.existsSync(htmlPath)) {
  console.error('Usage: node scripts/html-to-react.js <path-to-saved.html> [output-name] [--lines=START,END]');
  console.error('  --lines=2982,3527  use line range for #__next (if depth-based extract is too short)');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');
const pageDir = path.join(rootDir, 'src', 'pages', outputName);
const publicAssetsDir = path.join(rootDir, 'public', 'assets');

if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });

let html = fs.readFileSync(htmlPath, 'utf-8');

// --- 1. Extract CSS ---
const styleBlocks = [];
const styleRe = /<style[^>]*>\s*([\s\S]*?)\s*<\/style>/gi;
let match;
while ((match = styleRe.exec(html)) !== null) {
  styleBlocks.push(match[1].trim());
}
const cssPath = path.join(pageDir, 'styles.css');
if (styleBlocks.length) {
  const content = styleBlocks.map((block, i) => `/* --- style block ${i + 1} --- */\n\n${block}`).join('\n\n');
  fs.writeFileSync(cssPath, content, 'utf-8');
  console.log(`Wrote ${path.relative(rootDir, cssPath)} (${styleBlocks.length} blocks)`);
}

// --- 2. Extract base64 assets ---
if (!fs.existsSync(publicAssetsDir)) fs.mkdirSync(publicAssetsDir, { recursive: true });

const assetRe = /data:(image\/[^;]+|font\/[^;]+);base64,([A-Za-z0-9+/=]+)/g;
const assetMap = new Map(); // data URL -> public path
let assetIndex = 0;
match = null;
while ((match = assetRe.exec(html)) !== null) {
  const full = match[0];
  const mime = match[1];
  const b64 = match[2];
  if (assetMap.has(full)) continue;
  const ext = mime.replace('svg+xml', 'svg').replace('jpeg', 'jpg').split('/')[1];
  const name = `${outputName}-${assetIndex}.${ext}`;
  const outPath = path.join(publicAssetsDir, name);
  fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
  assetMap.set(full, `/assets/${name}`);
  assetIndex++;
  console.log(`  asset: ${name}`);
}

// --- 3. Extract main content ---
let fragment;
if (lineRange && lineRange.length >= 2) {
  const [startLine, endLine] = lineRange;
  const lines = html.split(/\r?\n/);
  fragment = lines.slice(startLine - 1, endLine).join('\n');
} else {
  const nextStart = html.indexOf('<div id=__next>');
  const bodyStart = html.indexOf('<body');
  const bodyEnd = html.indexOf('</body>');

  if (nextStart !== -1) {
  const endMarkers = ['</next-route-announcer>', '<iframe owner=archetype', '<iframe id=intercom-frame'];
  let end = html.length;
  for (const m of endMarkers) {
    const idx = html.indexOf(m, nextStart);
    if (idx !== -1 && idx < end) end = idx;
  }
  const segment = html.slice(nextStart, end);
  let depth = 0;
  let pos = 0;
  while (pos < segment.length) {
    if (segment.slice(pos, pos + 5) === '<div ' || segment.slice(pos, pos + 5) === '<div>') {
      depth++;
      pos += 4;
    } else if (segment.slice(pos, pos + 6) === '</div>') {
      depth--;
      if (depth === 0) {
        fragment = segment.slice(0, pos + 6);
        break;
      }
      pos += 6;
    } else {
      pos++;
    }
  }
  if (!fragment) fragment = segment;
  if (fragment && fragment.length < 10000) {
    console.warn('  (fragment very short; try --lines=START,END e.g. --lines=2982,3527)');
  }
  } else if (bodyStart !== -1 && bodyEnd !== -1) {
  const inner = html.slice(bodyStart + html.slice(bodyStart).indexOf('>') + 1, bodyEnd);
  fragment = inner.trim();
  } else {
  fragment = html;
  }
}

// --- 4. Replace base64 with asset paths ---
for (const [dataUrl, publicPath] of assetMap) {
  while (fragment.includes(dataUrl)) {
    fragment = fragment.replace(dataUrl, publicPath);
  }
}
fragment = fragment.replace(/src="data:,"/g, 'src=""').replace(/src=data:,/g, 'src=""');

// --- 5. Write page folder: pageHtml.js, Page.jsx, index.js ---
const escaped = fragment.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const jsContent = `// Auto-generated from ${path.basename(htmlPath)}\n// Use with: <div dangerouslySetInnerHTML={{ __html: pageHtml }} />\n\nexport const pageHtml = \`${escaped}\`;\n`;
const jsPath = path.join(pageDir, 'pageHtml.js');
fs.writeFileSync(jsPath, jsContent, 'utf-8');
console.log(`Wrote ${path.relative(rootDir, jsPath)} (${fragment.length} chars)`);

const pageJsx = `import './styles.css'
import { pageHtml } from './pageHtml'

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
}
`;
fs.writeFileSync(path.join(pageDir, 'Page.jsx'), pageJsx, 'utf-8');
console.log(`Wrote ${path.relative(rootDir, pageDir)}/Page.jsx`);

fs.writeFileSync(path.join(pageDir, 'index.js'), "export { default } from './Page'\n", 'utf-8');
console.log(`Wrote ${path.relative(rootDir, pageDir)}/index.js`);
console.log('Done.');
