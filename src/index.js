import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/Productcontext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const domḁin=process.env.React_App_domain;
const client=process.env.React_App_Client;

console.log("🚀 ~ domḁin:", domḁin)
root.render(
    <Auth0Provider
    domain={domḁin}
    clientId={client}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >  
<AppProvider>
<App />
</AppProvider>
</Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
