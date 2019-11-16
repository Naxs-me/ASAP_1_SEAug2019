import React from 'react';
import Navigation_bar from './Navigation_Bar1';
import '../App.css';
import Footer from './Footer'

function profile() {
    return (
        <div>
            <Navigation_bar></Navigation_bar>
            <h1>Welcome to your profile section</h1>
            <Footer></Footer>
        </div>
    );
}
export default profile