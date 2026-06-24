# Pages

Each Feedly page lives in its own folder so you can work on them individually.

## Structure (per page)

```
pages/
  homepage/
    styles.css   # CSS extracted from the saved HTML
    pageHtml.js  # HTML string (export pageHtml) for dangerouslySetInnerHTML
    Page.jsx     # Component that imports styles + pageHtml and renders
    index.js     # Re-exports Page
  market-intel/  # Same structure (add via conversion script)
  signin/
  ...
```

## Adding a new page

From the repo root, run the conversion script:

```bash
node scripts/html-to-react.js "../path/to/saved.html" <page-name> [--lines=START,END]
```

Example:

```bash
node scripts/html-to-react.js "../Feedly Market Intelligence….html" market-intel
```

Then in `App.jsx` you can import and render that page:

```jsx
import MarketIntel from './pages/market-intel'
// <MarketIntel />
```

See `scripts/README.md` for full usage and `--lines` for Next.js pages.
