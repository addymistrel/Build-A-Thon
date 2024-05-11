import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import NurseRegistration from "./Pages/NurseRegistration/NurseRegistration";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nurse/registration" element={<NurseRegistration/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
