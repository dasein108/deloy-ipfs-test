import React from "react";
import { Routes, Route } from "react-router-dom";
import IpfsRouter from "ipfs-react-router";
import HomePage from "./pages/home";
import SimplePage from "./pages/simple";
import ParamsPage from "./pages/params";
import "./App.css";

function App() {
  return (
    <div className="App">
      <IpfsRouter>
        <Routes>
          <Route path="/params/:id" element={<ParamsPage />} />
          <Route path="/simple" element={<SimplePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </IpfsRouter>
    </div>
  );
}

export default App;
