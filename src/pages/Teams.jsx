import React from "react";

import Header from "../components/Header";
import Footer1 from "../components/Footer1";
import "../styles/Teams.css";

const Teams = () => {
    return (
            
            <div className="container-teams">
                <Header />

                <div className="content-teams">
                    <h3>Our Amazing Teams</h3>

                    <div className="image-teams">
                        <div className="charless">
                            <img src="./images/chrls.jpg" alt="chrls-img"></img>
                            <h4>
                                Charless Mulyono
                            </h4>
                            <p>
                                Full Stack Developer
                            </p>
                        </div>

                        <div className="gerald">
                            <img src="./images/ge.jpg" alt="ge-img"></img>
                            <h4>
                                Giraldi Prama Yudistira
                            </h4>
                            <p>
                                UI/UX Designer
                            </p>
                        </div>

                        <div className="tyo">
                            <img src="./images/tyo.jpg" alt="tyo-img"></img>
                            <h4>
                                Setyo Hadi Prabowo
                            </h4>
                            <p>
                                Project Manager
                            </p>
                        </div>

                    </div>

                    <div className="contact-newsletter">
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p>Email: blossombiz@gmail.com</p>
                            <p>Phone: 0851 5648 1261</p>
                            <p>Address: Antapani, Bandung City, Indonesia</p>
                        </div>

                        <div className="brandty">
                            <img src="./images/logonav.png" alt="logonav-img"></img>
                        </div>

                        <div className="newsletter">
                            <h3>Subscribe to Our Newsletter</h3>
                            <form>
                                <input type="email" placeholder="Enter your email" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>

                </div>
                <Footer1 />

            </div>

    );
};

export default Teams;