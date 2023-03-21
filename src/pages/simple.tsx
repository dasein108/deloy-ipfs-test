import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function SimplePage() {
  return (
    <div>
      <h1>This is simple page 🪗</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default SimplePage;
