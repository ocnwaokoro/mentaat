# HTML-to-React conversion script

Converts a SingleFile-saved Feedly HTML page into a **page folder** under `src/pages/<name>/` so you can work on each page individually.

## Output: one folder per page

Each run creates (or overwrites) `src/pages/<output-name>/`:

| File         | Purpose |
|--------------|--------|
| `styles.css` | All extracted `<style>` blocks from the HTML |
| `pageHtml.js`| Exports `pageHtml` string for `dangerouslySetInnerHTML` |
| `Page.jsx`   | Component that imports styles + pageHtml and renders the fragment |
| `index.js`   | Re-exports the Page component |

Assets are written to `public/assets/` with the prefix `<output-name>-0`, `<output-name>-1`, etc.

## Usage

From the **feedly-react** root:

```bash
node scripts/html-to-react.js <path-to-saved.html> [output-name] [--lines=START,END]
```

- **path-to-saved.html** – Path to the saved HTML (e.g. in the parent `feedly/` folder).
- **output-name** – Optional. Name of the page folder under `src/pages/`. Default: `homepage`.
- **--lines=START,END** – Optional. For Next.js pages with `#__next`, use if the auto-extracted fragment is too short (e.g. `--lines=2982,3527` for the homepage).

## Examples

**Homepage (with line range for full content):**

```bash
node scripts/html-to-react.js "../Feedly： Track the topics and trends that matter to you (2_24_2026 7：07：05 AM).html" homepage --lines=2982,3527
```

→ `src/pages/homepage/` (styles.css, pageHtml.js, Page.jsx, index.js) + `public/assets/homepage-*`

**Market Intelligence:**

```bash
node scripts/html-to-react.js "../Feedly Market Intelligence….html" market-intel
```

→ `src/pages/market-intel/` + `public/assets/market-intel-*`

**Sign In (body-only, no `#__next`):**

```bash
node scripts/html-to-react.js "../Feedly _ Sign In….html" signin
```

→ `src/pages/signin/` + `public/assets/signin-*`

## Using a page in the app

**Single page (e.g. current App.jsx):**

```jsx
import Homepage from './pages/homepage'
export default function App() {
  return <Homepage />
}
```

**Switch or add another page:**

```jsx
import Homepage from './pages/homepage'
import SignIn from './pages/signin'
// use <Homepage /> or <SignIn /> (or add a router)
```

## Finding line numbers for `--lines`

If the script warns that the fragment is very short:

- Open the HTML and find the **first line** with `<div id=__next>` (e.g. 2982).
- Find the **last line** of main content before `</next-route-announcer>` or iframes (e.g. 3527).
- Run with `--lines=2982,3527` (1-based, inclusive).
