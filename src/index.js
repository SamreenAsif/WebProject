import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavCategoryProvider from "./share/context/nav-category-context";
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <NavCategoryProvider>
        <App />
      </NavCategoryProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
