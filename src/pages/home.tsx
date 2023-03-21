import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";

function HomePage() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Fuck Google!</p>
        <Link to="/simple">Go to Simple Page</Link>
        <Link to="/params/777">Go to Page with params</Link>
      </header>
    </div>
  );
}

export default HomePage;
