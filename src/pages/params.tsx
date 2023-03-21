import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import "../App.css";

function ParamsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>This page with ID {id}</h1>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
}

export default ParamsPage;
