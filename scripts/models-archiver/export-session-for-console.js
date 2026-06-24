/**
 * PASTE THIS ENTIRE BLOCK INTO THE BROWSER CONSOLE while logged in on models.com
 * (F12 → Console → paste → Enter)
 *
 * It will output a JSON string. Copy that (including the outer braces), save to
 * a file named exported-session.json in this folder, then run:
 *   npm run import-auth -- exported-session.json
 *
 * Note: The console cannot read HttpOnly cookies. If the site keeps the session
 * only in HttpOnly cookies (common with "Continue with Google"), this export
 * may not be enough for headless. In that case, use "npm run login" and log in
 * in the browser window that opens — that saves the full session including
 * HttpOnly cookies.
 */
(function () {
  const origin = location.origin;
  const hostname = location.hostname;

  const cookies = document.cookie.split(";").map((s) => s.trim()).filter(Boolean).map((s) => {
    const i = s.indexOf("=");
    const name = i >= 0 ? s.slice(0, i).trim() : s;
    const value = i >= 0 ? s.slice(i + 1).trim() : "";
    return { name, value, domain: hostname, path: "/", expires: -1, httpOnly: false, secure: location.protocol === "https:", sameSite: "Lax" };
  });

  const localStorageArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) localStorageArr.push({ name: key, value: localStorage.getItem(key) });
  }
  const sessionStorageArr = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (key) sessionStorageArr.push({ name: key, value: sessionStorage.getItem(key) });
  }

  const state = {
    cookies,
    origins: [
      { origin, localStorage: localStorageArr, sessionStorage: sessionStorageArr }
    ]
  };

  console.log("Copy the JSON below (from { to }) and save as exported-session.json, then run: node import-auth.js exported-session.json");
  console.log(JSON.stringify(state, null, 2));
  return state;
})();
