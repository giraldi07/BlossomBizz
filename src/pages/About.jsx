import React from "react";
import Header from "../components/Header";
import Footer1 from "../components/Footer1";
import "../styles/About.css";


const About = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="image-abt">
        <img src="./images/about.png" alt="img-about"></img>
      </div>

      <div className="judul-abt">
        <h3>About Us</h3>
      </div>
      <div className="paragraf-abt">
        <p>
          "BlossomBIZ is a leader in providing innovative software solutions<br></br>
          for companies worldwide. We are dedicated to delivering<br></br>cutting-edge
          technology that helps your business thrive and grow."
        </p>
      </div>
      <div className="paragraf-abt">
        <h4>Our Story</h4>
        <p>
          "BlossomBIZ was founded in 2023, <br></br>with a vision to transform how
          businesses harness technology. <br></br>Since then, we have achieved
          significant milestones <br></br>in the IT industry and continue to deliver
          revolutionary solutions <br></br>to our customers."
        </p>
      </div>

      <div className="vis-mis">
        <div className="vision">
          <h4>Vision</h4>
          <p>
            To be the leading driving force behind the digital revolution,<br></br>
            leading the change towards a connected, intelligent, and sustainable
            world.
          </p>
        </div>
        <div className="mission">
          <h4>Mission</h4>
          <p>
            To inspire and enable digital transformation <br></br>through sustainable
            innovation, providing revolutionary software solutions, <br></br>and forging
            strong partnerships <br></br>with customers to achieve mutual success.
          </p>
        </div>
      </div>

      <div className="identity">
        <div className="paragraf-identity">
          <h4>Identity</h4>
          <p>
            BlossomBiz symbolizes continuous progress and growth. "Blossom"
            signifies the process of transformation and development, while "Biz"
            is short for "business," reflecting our focus on aiding businesses
            in their growth and expansion. We believe that every business has
            the potential to bloom and flourish like a blossoming flower.
            BlossomBiz is committed to being a partner in this growth journey,
            providing the necessary tools and solutions to help businesses reach
            their full potential.
          </p>
        </div>
        <div className="logo-identity">
          <h4>Logo</h4>
          <img src="./images/logo-identity.png" alt="logo-identity" />
        </div>
        <div className="color-of-logo">
          <div className="judul-color-of-logo">
            <h4>Color of Logo</h4>
              <div className="container-env">
                <div className="light-env">
                  <h4>Light Environment</h4>
                  <img src="./images/light-env.png" alt="img-env-light" />
                </div>
                <div className="dark-env">
                  <h4>Dark Environment</h4>
                  <img src="./images/dark-env.png" alt="img-env-dark" />
                </div>
              </div>
          </div>
        </div>
        <div className="color-of-design">
          <h4>Color of Design</h4>
          <img src="./images/col-design.png" alt="img-col-design" />
        </div>
        <div className="meaning-of-color">
          <h4>Meaning of Color</h4>
          <p>
          &#8226; Red (#ED1C24):<br></br>
              &#8226;Symbolizing passion, courage, and excellence.<br></br>
              &#8226;Reflects determination to be the best in the industry.<br></br>
              &#8226;Supports customers with outstanding solutions. 
  
            <br></br>
          </p>
          <p>
          &#8226;White (#FFFFFF): <br></br>
              &#8226;Symbolizing purity, clarity, and intelligence.<br></br>
              &#8226;Reflects commitment to providing transparent, efficient, and intelligent solutions.<br></br>
              &#8226;Represents a clean and modern design.
          </p>
        </div>


        
      </div>
      <Footer1 />
    </div>
  );
};

export default About;
