import React from "react";
import NavBar from "./NavBar.js";
import Promotions from "./Promotions.js";
import Categories from "./Categories.js";
import MediaCard from "./Card.js";

    const footerStyle = {
      backgroundColor: "#F50057",
      fontSize: "20px",
      color: "white",
      borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "20px",
      left: "0",
      bottom: "0",
      height: "60px",
      width: "100%"
    };
    
    const phantomStyle = {
      display: "block",
      padding: "20px",
      height: "60px",
      width: "100%"
    };
    
    function Footer({ children }) {
      return (
        <div>
          <div style={phantomStyle} />
          
          <div 
          style={footerStyle}>{children}
          <p>© YouthComputing 2020 </p>
          </div>
        </div>

      );
    }

export default Footer;
