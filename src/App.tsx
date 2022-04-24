import React from "react";
import "./App.less";
import FrontPage from "./Pages/FrontPage";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rental from "./Pages/Rental";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="rental/:id" element={<Rental />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
