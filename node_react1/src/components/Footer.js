import React from 'react';
import "../App.css";

var style = {
    backgroundColor: "black",
    borderTop: "1px solid #E7E7E7",
    textAlign: "left",
    //padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "150px",
    width: "100%",
    //padding:"3%"
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={style} className="footer">
                Home
                <br/>About Us
                <br/>Contact Us
                <br/>Login
                <br/>SignUp
                <center>Version 1.0</center>
            </div>
        </div>
    )
}

export default Footer