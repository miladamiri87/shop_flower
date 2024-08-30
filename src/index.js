import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import "./SrtyleSheet/Navbar.css";
import "./SrtyleSheet/Banner_craowsel.css";
import "./SrtyleSheet/Loader_Spinner.css";
import "./SrtyleSheet/Home.css";
import "./SrtyleSheet/New_arrival_card.css";
import "./SrtyleSheet/Shop.css";
import "./SrtyleSheet/Contact_us.css";
import "./SrtyleSheet/About.css";
import "./SrtyleSheet/Detail_product.css";
import "./SrtyleSheet/Login.css";
import { Provider } from "react-redux";
import { store } from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
