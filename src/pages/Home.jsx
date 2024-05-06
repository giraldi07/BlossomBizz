import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/Home.css";
import Footer1 from "../components/Footer1";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Menandai bahwa komponen telah dimuat setelah sedikit penundaan
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Membersihkan timeout untuk mencegah kebocoran memori
    return () => clearTimeout(timeout);
  }, []);

  const handleWhatsAppClick = () => {
    window.location.href =
      "https://wa.me/6285156481261?text=Halo,%20Saya%20berkenan%20untuk%20jasa%20BlossomBIZ";
  };

  return (
    <div className={`home ${isLoaded ? "show" : ""}`}>
      <Header />
      <div className="container-content">
        <div className={`greeting-text ${isLoaded ? "show" : ""}`}>
          <div className="judul">
            <h1>We Are</h1>
          </div>
          <div className="img-textuality">
            <img src="./images/blossomtxt.png" alt="img-textual" />
          </div>
          <div className="slogan">
            <h3>Blooming Innovation, Sustainable Solutions.</h3>
          </div>
          <div className="slogan">
            <p>
              At BlossomBIZ, we pioneer software solutions
              <br></br>
              for your business to thrive in the digital era.
              <br></br>
              Our blend of innovation and sustainability
              <br></br>
              ensures robust platforms for your vision.
              <br></br>
              With us, witness innovation in bloom.
            </p>
          </div>
          <div className="container-btn">
            <div className="sosial-media">
              <div className="sm-button" onClick={handleWhatsAppClick}>
                <img src="./images/icons/wa.png" alt="icon-wa" />
              </div>

              <a href="mailto:giraldipramay@gmail.com" className="sm-button">
                <img src="./images/icons/mail.png" alt="icon-mail" />
              </a>

              <a href="tel:+6285156481261" className="sm-button">
                <img src="./images/icons/call.png" alt="icon-call" />
              </a>
            </div>

            <div className="cta-button">
              <button className="joinButton">Join with us</button>
            </div>
          </div>
        </div>

        <div className={`home-image ${isLoaded ? "show" : ""}`}>
          <div>
            <img src="./images/image-home.png" alt="img-home" />
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
};

export default Home;
