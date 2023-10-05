import React from "react";
import "./Footer.css";
// import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo-fit.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="contains">
          <ul style={{color:'#ddfca5'}}>
            <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Fitness</p>
            <p>Workout Plans</p>
            <p>Workout Videos</p>
            <p>Top Recipes</p>
            <p>Fitness Articles</p>
            <p>Fitness Calculators</p>
          </ul>
          <ul style={{color:'#ddfca5'}}>
            <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Shop</p>
            <p>Our Best Seller</p>
            <p>Trending Products</p>
            <p>Staff's Pick up</p>
            <p>Diet Menu</p>
            <p>Shop Visited</p>
          </ul>
          <ul style={{color:'#ddfca5'}}>
            <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Company</p>
            <p>Contacts</p>
            <p>Address</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Legal Notice</p>
          </ul>
        </div>

        <div className="social-links">
          <img className="logo-f" style={{ marginLeft: "-48rem" }} src={Logo}alt=""/>
          <div className="linking">
            <img className="whatsapp" src={whatsapp} alt="" />
            <img className="insta" src={Instagram} alt="" />
            <img className="face" src={facebook} alt="" />
            <img className="link" src={LinkedIn} alt="" />
          </div>
        </div>
      </div>

      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
      <div className="copyright">
        <span>copyright ©2023 Believing Through Achieving </span>
        <span>Designed and Hosted By Praveen Kumar</span>
      </div>
    </div>
  );
};

export default Footer;
