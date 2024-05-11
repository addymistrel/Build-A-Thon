import { useState, React, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Mainsection from "../../Components/Mainsection/Mainsection";
import HeroSection from "../../Components/Herosection/Herosection";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Mainsection />
      <Footer />
    </>
  );
}
