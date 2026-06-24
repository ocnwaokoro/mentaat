import { BASE, BASE_ORIGIN } from "./config.js";

export function normalizeUrl(url) {
  try {
    const u = new URL(url, BASE);
    if (!u.origin.endsWith("models.com")) return null;
    u.hash = "";
    u.search = "";
    let p = u.pathname || "/";
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    u.pathname = p;
    return u.href;
  } catch {
    return null;
  }
}

export function pathSegments(url) {
  try {
    const u = new URL(url, BASE);
    const p = u.pathname.replace(/\/$/, "") || "/";
    return p.split("/").filter(Boolean);
  } catch {
    return [];
  }
}

export function extractLinks(page, origin = BASE_ORIGIN) {
  return page.evaluate((baseOrigin) => {
    const links = [];
    document.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;
      try {
        const u = new URL(href, baseOrigin);
        if (u.origin === baseOrigin || u.hostname.endsWith("models.com")) links.push(u.href);
      } catch {}
    });
    return [...new Set(links)];
  }, origin);
}

export function setInTree(tree, segments, fullUrl) {
  let node = tree;
  for (const seg of segments) {
    if (!node[seg]) node[seg] = { _urls: [] };
    node = node[seg];
  }
  if (!node._urls) node._urls = [];
  if (!node._urls.includes(fullUrl)) node._urls.push(fullUrl);
}

export function treeToText(node, prefix = "", pathSoFar = "") {
  const lines = [];
  const keys = Object.keys(node).filter((k) => k !== "_urls").sort();
  const urls = node._urls || [];
  if (urls.length) {
    lines.push(prefix + (pathSoFar || "/") + (pathSoFar ? "" : " (root)"));
    for (const u of urls.slice(0, 5)) lines.push(prefix + "  └ " + u);
    if (urls.length > 5) lines.push(prefix + "  └ ... +" + (urls.length - 5) + " more");
  }
  for (const key of keys) {
    const childPath = pathSoFar ? pathSoFar + "/" + key : key;
    lines.push(prefix + key + "/");
    lines.push(...treeToText(node[key], prefix + "  ", childPath).filter(Boolean));
  }
  return lines;
}

export function urlToFilename(url) {
  try {
    const u = new URL(url);
    let p = u.pathname || "/";
    if (p.endsWith("/")) p += "index";
    p = p.replace(/^\//, "").replace(/\//g, "_") || "index";
    return p.slice(0, 150) + ".html";
  } catch {
    return "page.html";
  }
}

/**
 * Map URL to a path that mirrors the site dir tree under output/<date>/.
 * Prefixes with host (dots → underscores) so www.models.com and help.models.com don't collide.
 * e.g. https://www.models.com/about/services/ → "www_models_com/about/services/index.html"
 * @returns {string} Relative path with forward slashes (host + dirs + filename).
 */
export function urlToDirPath(url) {
  try {
    const u = new URL(url);
    const hostSegment = u.hostname.replace(/\./g, "_");
    const pathname = u.pathname || "/";
    const trailingSlash = pathname.endsWith("/");
    let p = pathname.replace(/\/$/, "") || "/";
    const segments = p.split("/").filter(Boolean);
    if (segments.length === 0) return hostSegment + "/index.html";
    const last = segments[segments.length - 1];
    const hasExt = /\.(html?|cfm)$/i.test(last);
    const isDir = trailingSlash;
    const dirs = hasExt ? segments.slice(0, -1) : (isDir ? segments : segments.slice(0, -1));
    const file = hasExt ? last : (isDir ? "index.html" : last + ".html");
    const pathParts = dirs.length ? [...dirs, file] : [file];
    return (hostSegment + "/" + pathParts.join("/")).slice(0, 250);
  } catch {
    return "page.html";
  }
}

/**
 * Scroll to bottom in steps (to trigger lazy-loaded content and styles), then back to top.
 * @param {{ atBottomMs?: number, step?: number }} opts - atBottomMs: pause at bottom (default 500); step: px per frame (default 600). Faster defaults for headed archiving.
 */
export function scrollFullPageScript(opts = {}) {
  const atBottomMs = opts.atBottomMs ?? 500;
  const step = opts.step ?? 600;
  return `
  (function() {
    return new Promise(function(resolve) {
      var h = document.documentElement.scrollHeight;
      var step = ${step};
      var y = 0;
      function scrollDown() {
        y += step;
        window.scrollTo(0, Math.min(y, h));
        if (y < h) {
          requestAnimationFrame(scrollDown);
        } else {
          setTimeout(function() {
            window.scrollTo(0, 0);
            setTimeout(resolve, 300);
          }, ${atBottomMs});
        }
      }
      requestAnimationFrame(scrollDown);
    });
  })();
  `;
}

/**
 * Returns a promise that resolves when style tags stop changing (count + total length
 * unchanged for 2s). Run in page after scroll so CSS-in-JS has settled. Poll every 300ms.
 */
export function waitForStyleStabilityScript() {
  return `
  (function() {
    return new Promise(function(resolve) {
      var last = { count: 0, length: 0 };
      var same = 0;
      var check = function() {
        var styles = document.querySelectorAll("style");
        var count = styles.length;
        var length = 0;
        styles.forEach(function(s) { length += (s.textContent || "").length; });
        if (last.count === count && last.length === length) {
          same += 300;
          if (same >= 2000) return resolve();
        } else {
          same = 0;
          last = { count: count, length: length };
        }
        setTimeout(check, 300);
      };
      setTimeout(check, 300);
    });
  })();
  `;
}

/**
 * Inline getComputedStyle onto each element so saved HTML looks correct without external CSS.
 * Returns a string of JS to run in the page (page.evaluate(script)).
 */
export function getInlineComputedStylesScript() {
  return `
  (function() {
    var props = ["display","position","top","right","bottom","left","z-index","width","height",
      "min-width","min-height","max-width","max-height","margin","margin-top","margin-right","margin-bottom","margin-left",
      "padding","padding-top","padding-right","padding-bottom","padding-left","box-sizing","border-radius",
      "flex","flex-direction","flex-wrap","align-items","justify-content","gap",
      "font-family","font-size","font-weight","line-height","text-align","color",
      "background-color","background-image","background-size","background-position",
      "opacity","visibility","overflow","overflow-x","overflow-y","box-shadow","border"];
    var n = 0;
    try {
      document.querySelectorAll("body *").forEach(function(el) {
        var s = window.getComputedStyle(el);
        var parts = [];
        props.forEach(function(p) {
          var v = s.getPropertyValue(p);
          if (v) parts.push(p + ":" + v);
        });
        if (parts.length) {
          var cur = el.getAttribute("style") || "";
          el.setAttribute("style", cur + (cur ? ";" : "") + parts.join(";"));
          n++;
        }
      });
    } catch (e) { console.warn(e); }
    return n;
  })();
  `;
}

/**
 * Freeze all CSS into one <style> tag so the saved HTML contains the full styles.
 * Collects from document.styleSheets (where accessible) and existing <style> tags.
 * Run after scroll + wait, before inlining computed styles and saving.
 */
export function freezeAllStylesScript() {
  return `
  (function() {
    var id = "archived-full-css";
    var existing = document.getElementById(id);
    if (existing) existing.remove();
    var out = [];
    try {
      for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        try {
          if (sheet.cssRules) {
            for (var j = 0; j < sheet.cssRules.length; j++) out.push(sheet.cssRules[j].cssText);
          }
        } catch (e) { }
      }
      document.querySelectorAll("style").forEach(function(st) {
        if (st.textContent) out.push(st.textContent);
      });
    } catch (e) { }
    var style = document.createElement("style");
    style.id = id;
    style.textContent = out.join("\\n");
    document.head.appendChild(style);
    return out.length;
  })();
  `;
}
