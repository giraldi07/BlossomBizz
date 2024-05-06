import React from "react";
import "../styles/Footer2.css";

const Footer2 = () => {
  return (
    <div className="contact-newsletter2">
        <div className="contact-info2">
            <h3>Contact Information</h3>
            <p>Email: blossombiz@gmail.com</p>
            <p>Phone: 0851 5648 1261</p>
            <p>Address: Antapani, Bandung City, Indonesia</p>
        </div>

        <div className="brandty2">
            <img src="./images/logonav.png" alt="logonav-img"></img>
        </div>

        <div className="newsletter2">
            <h3>Subscribe to Our Newsletter</h3>
            <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </div>
  );
};

export default Footer2;
