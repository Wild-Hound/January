import React from "react";
import "./App.less";
import FrontPage from "./Pages/FrontPage";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Rental from "./Pages/Rental";
import Checkout from "./Pages/Checkout";
import { useSelector } from "react-redux";
import { globalState } from "./Lib/Types";
import Login from "./Pages/Login";

function App() {
  const { isAuth } = useSelector((state: globalState) => state);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="login" element={<Login />} />
          <Route path="rental/:id" element={<Rental />} />
          <Route
            path="checkout"
            element={isAuth ? <Checkout /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
