import http from "node:http";
import { once } from "node:events";
import process from "node:process";
import { URL } from "node:url";

import { OAuth2Client } from "google-auth-library";

const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();

if (!clientId || !clientSecret) {
  throw new Error("Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET in the environment.");
}

const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI?.trim() || "http://127.0.0.1:8787/oauth2callback";
const oauthClient = new OAuth2Client(clientId, clientSecret, redirectUri);
const callbackUrl = new URL(redirectUri);

const authUrl = oauthClient.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: [
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/userinfo.email",
  ],
});

if (!["127.0.0.1", "localhost"].includes(callbackUrl.hostname)) {
  throw new Error("GOOGLE_OAUTH_REDIRECT_URI must point to localhost or 127.0.0.1 for this helper script.");
}

const codePromise = new Promise((resolve, reject) => {
  const server = http.createServer((req, res) => {
    try {
      const requestUrl = new URL(req.url || "/", redirectUri);
      if (requestUrl.pathname !== callbackUrl.pathname) {
        res.statusCode = 404;
        res.end("Not found");
        return;
      }

      const error = requestUrl.searchParams.get("error");
      const code = requestUrl.searchParams.get("code");

      if (error) {
        res.statusCode = 400;
        res.end(`Authorization failed: ${error}`);
        server.close();
        reject(new Error(`Google returned error: ${error}`));
        return;
      }

      if (!code) {
        res.statusCode = 400;
        res.end("No authorization code received.");
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end("<h1>Authorization received.</h1><p>You can return to Codex now.</p>");
      server.close();
      resolve(code);
    } catch (error) {
      server.close();
      reject(error);
    }
  });

  server.listen(Number(callbackUrl.port || 80), callbackUrl.hostname, async () => {
    console.log("\nOpen this URL in the browser and approve access:\n");
    console.log(authUrl);
    console.log("\nWaiting for Google to redirect back to:\n");
    console.log(redirectUri);
    console.log("\nIf Google shows redirect_uri_mismatch, add this exact URI to the OAuth client in Google Cloud Console.\n");
  });

  server.on("error", reject);
});

const code = await codePromise;

const { tokens } = await oauthClient.getToken(code);

console.log("\nRefresh token:\n");
console.log(tokens.refresh_token || "(no refresh token returned; revoke previous grant and try again with prompt=consent)");
console.log("\nAccess token:\n");
console.log(tokens.access_token || "(none)");
