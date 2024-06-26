import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import NurseRegistration from "./Pages/NurseRegistration/NurseRegistration";
import NurseActiveBooking from "./Pages/NurseActiveBookings/NurseActiveBooking";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import ContactFaq from "./Pages/Support/Support";
import Product from "./Pages/Product/Product";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Pages/RegisterChoice/Register";
import Map from "./Pages/Map/Map";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/nurse/registration" element={<NurseRegistration />} />
            <Route
              path="/nurse/active/bookings"
              element={<NurseActiveBooking />}
            />
            <Route path="/support" element={<ContactFaq />} />
            <Route path="/nurse/registration" element={<NurseRegistration />} />
            <Route
              path="/nurse/active/bookings"
              element={<NurseActiveBooking />}
            />
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/register" element={<Register />} />
            <Route path="/maps" element={<Map />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
