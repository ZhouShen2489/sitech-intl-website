import { OAuth2Client } from "google-auth-library";

import { getRootEnv } from "./shared-env.mjs";

const env = getRootEnv();
const requiredKeys = [
  "GMAIL_SENDER",
  "CONTACT_RECIPIENT",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "GOOGLE_REFRESH_TOKEN",
];

const missingKeys = requiredKeys.filter((key) => !env[key]?.trim());

if (missingKeys.length > 0) {
  console.error(`Missing mail config: ${missingKeys.join(", ")}`);
  process.exit(1);
}

const oauthClient = new OAuth2Client(env.GOOGLE_CLIENT_ID, env.GOOGLE_CLIENT_SECRET);
oauthClient.setCredentials({ refresh_token: env.GOOGLE_REFRESH_TOKEN });

const accessToken = await oauthClient.getAccessToken();

if (!accessToken.token) {
  console.error("Gmail OAuth refresh token did not return an access token.");
  process.exit(1);
}

console.log("Mail config OK. Gmail OAuth token can be refreshed.");
