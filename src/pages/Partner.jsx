import React from "react";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";
import "../styles/Partner.css";

const Partner = () => {
  return (
    <div className="container-partner">
      <Header />
      <div className="judul-partner">
        <h3>Available Soon...</h3>
      </div>
      <div className="loading-gif">
        <img src="./video/load.gif" alt="loading-gif"></img>
      </div>
      <Footer2 />
    </div>
  );
};

export default Partner;
