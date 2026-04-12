import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import AccountPage from "./pages/AccountPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import WishlistPage from "./pages/WishlistPage.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Authenticator.Provider>
  </React.StrictMode>
);
