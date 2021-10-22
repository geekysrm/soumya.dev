import keys from "../../../keys.json";
import jwt from "jsonwebtoken";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const CONFIG = {
  // The secret for the encryption of the jsonwebtoken
  JWTsecret: "mysecret",

  //   baseURL: baseURL,
  //   port: port,

  // The credentials and information for OAuth2
  oauth2Credentials: {
    client_id: keys.web.client_id,
    project_id: keys.web.project_id, // The name of your project
    auth_uri: keys.web.auth_uri,
    token_uri: keys.web.token_uri,
    auth_provider_x509_cert_url: keys.web.auth_provider_x509_cert_url,
    client_secret: keys.web.client_secret,
    redirect_uris: ["http://localhost:3000/api/oauth2callback"],
    scopes: ["https://www.googleapis.com/auth/youtube.readonly"],
  },
};

export default function handler(req, res) {
  const oauth2Client = new OAuth2(
    CONFIG.oauth2Credentials.client_id,
    CONFIG.oauth2Credentials.client_secret,
    CONFIG.oauth2Credentials.redirect_uris[0]
  );

  // Obtain the google login link to which we'll send our users to give us access
  const loginLink = oauth2Client.generateAuthUrl({
    access_type: "offline", // Indicates that we need to be able to access data continously without the user constantly giving us consent
    scope: CONFIG.oauth2Credentials.scopes, // Using the access scopes from our config file
  });
  //   return res.render("index", { loginLink: loginLink });
  res.status(200).json({ loginLink });
}
