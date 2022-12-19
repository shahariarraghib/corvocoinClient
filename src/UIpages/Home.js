import React from "react";
import "../App.css";
import About from "../UXpages/About";
import LandingPage from "../UXpages/LandingPage";
import Footer from "../UXpages/Footer";
import MediaLinks from "../UXpages/MediaLinks";
// import Fiver from "../Fiver";

function Home() {
  return (
    <>
      <LandingPage />
      {/* <Fiver /> */}
      <About />
      <MediaLinks />
      <Footer />
    </>
  );
}

export default Home;
