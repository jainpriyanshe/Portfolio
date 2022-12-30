import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Experience from "./Experience";
import Contact from "./Contact";
import Skills from "./Skills";
import Footer from "./Footer";
export default function () {
  return (
    <>
      <Navbar />
      <div style={{marginTop: '70px'}}>
        <Home />
        <Experience />
        <Skills/>
        <Contact/>
        <Footer/>
            </div>
    </>
  );
}
