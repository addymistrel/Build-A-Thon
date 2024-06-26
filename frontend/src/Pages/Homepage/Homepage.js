import { useState, React, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";

import Footer from "../../Components/Footer/Footer";
import Mainsection from "../../Components/Mainsection/Mainsection";
import HeroSection from "../../Components/Herosection/Herosection";
import Stats from "../../Components/Stats/Stats";
import Pricing from "../../Components/Pricing/Pricing";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <Mainsection />
      <Pricing />
      <Footer />
    </>
  );
}
