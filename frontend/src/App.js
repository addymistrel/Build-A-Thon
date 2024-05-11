import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import NurseRegistration from "./Pages/NurseRegistration/NurseRegistration";
import NurseActiveBooking from "./Pages/NurseActiveBookings/NurseActiveBooking";
import Product from "./Pages/Product/Product";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Pages/RegisterChoice/Register";
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div className="mt-20">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nurse/registration" element={<NurseRegistration/>} />
          <Route path="/nurse/active/bookings" element={<NurseActiveBooking/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
