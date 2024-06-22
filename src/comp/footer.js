import React from "react";
import "./footer.css";
import {
  FaPiggyBank,
  FaShippingFast,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";

const Footer = () => {
  const handleAboutUsClick = () => {
    window.open("/about.html", "_blank");
  };

  const handleFeedbackClick = () => {
    window.open("/feedback.html", "_blank");
  };
  const HandleMagazineclick = () => {
    window.open("/mag.html", "_blank");
  };
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="left-box">
            <div className="box">
              <div className="icon_box">
                <FaPiggyBank />
              </div>
              <div className="detail">
                <h3>Great Saving</h3>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaShippingFast />
              </div>
              <div className="detail">
                <h3>free delivery</h3>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaHeadphonesAlt />
              </div>
              <div className="detail">
                <h3>24X7 support</h3>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaWallet />
              </div>
              <div className="detail">
                <h3>money back</h3>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="header">
              <img
                src="image/logo.webp"
                alt=""
                height="200px"
                width="500px"
              ></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur Nuliscing elit. Duis
                faucibus ipsum id sem Putconsequat Text.
              </p>
            </div>
            <div className="bottom">
              <div className="box">
                <h3>Your Account</h3>
                <ul>
                  <li onClick={handleAboutUsClick}>About</li>
                  <li>Payment</li>
                  <li onClick={handleFeedbackClick}>Feedback</li>
                </ul>
              </div>
              <div className="box">
                <h3>products</h3>
                <ul>
                  <li>Delivery</li>
                  <li>Track Oder</li>
                  <li onClick={HandleMagazineclick}>our magazine</li>
                </ul>
              </div>
              <div className="box">
                <h3>contact us</h3>
                <ul>
                  <li>Lorem fdvf</li>
                  <li>+(91)9999xxx</li>
                  <li>info@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
