import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Component/Navbar.jsx";

import Hero from "./Component/Hero.jsx";
import Footer from "./Component/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero />
    <Footer />
  </React.StrictMode>
);
