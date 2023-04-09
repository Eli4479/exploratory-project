import React, { useState } from "react";

// Components import
import Navbar from "../components/Navbar/Navbar";
import NavbarResponsive from "../components/NavbarResponsive/NavbarResponsive";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Growth from "../components/Growth/Growth";
import Questions from "../components/Questions/Questions";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <div className="Home">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero />
      <Features />
      <Growth />
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;
