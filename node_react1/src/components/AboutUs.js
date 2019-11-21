import React from 'react';
import '../App.css';
import NavigationBar from './Navigation_Bar';
import Footer from './Footer';

function AboutUs(){
    return (
        <div>
        <NavigationBar/>
        <center>
        <div className="AboutUs">
        <h2>About Us</h2>
            <br/>
            <p>
                This is a Web Portal designed for lodging your complaints and providing live status for them.
            </p>
            <br/>
            <p>
                The platform has been designed to impove transparency and add convenience for lodging complaints.
            </p>
        </div>
        </center>
        <Footer/>
        </div>
    );
}
export default AboutUs;