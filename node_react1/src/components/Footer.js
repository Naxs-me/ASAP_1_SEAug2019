import React from 'react';
import "../App.css";
import {Link} from 'react-router-dom';

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

function Footer({ children }) {
    return (
        <div>
            <div style={style} className="footer">
                <Link to="/">Home</Link>
                <br/><Link to="/AboutUs">About Us</Link>
                <br/><Link to="/ContactUs">Contact Us</Link>
                <br/><Link to="/Login">Login</Link>
                <br/><Link to="/SignUp">SignUp</Link>
                <center>Version 1.0</center>
            </div>
        </div>
    )
}

export default Footer