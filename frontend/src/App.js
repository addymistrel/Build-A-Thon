import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import NurseRegistration from "./Pages/NurseRegistration/NurseRegistration";
import NurseActiveBooking from "./Pages/NurseActiveBookings/NurseActiveBooking";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nurse/registration" element={<NurseRegistration />} />
          <Route
            path="/nurse/active/bookings"
            element={<NurseActiveBooking />}
          />
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
