import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "../App.css";

function ParamsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>This page with ID {id}</h1>
      <Link to="/simple">Go Simple page</Link>
      <div>
        <Link to="/">Go home</Link>
      </div>
    </div>
  );
}

export default ParamsPage;
