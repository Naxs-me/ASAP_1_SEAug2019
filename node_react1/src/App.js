import React from 'react';
import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
import NavigationBar from './components/Navigation_Bar';
import LoginPage from './components/Login';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <div>
      <NavigationBar/>
      <Footer />
    </div>
  );
}

export default App;
