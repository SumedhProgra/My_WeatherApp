import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";
import Wel from "./subComponents/wel";

const Frontp = () => {
  const navto = useNavigate();

  setTimeout(() => {
    navto("/App");
  }, 5000);
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Wel />} />
        <Route path="/App" element={<App />} />
      </Routes>
    </div>
  );
};

export default Frontp;
