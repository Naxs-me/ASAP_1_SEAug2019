import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavigationBar from './components/Navigation_Bar';
import LoginPage from './components/Login';
import Footer from './components/Footer';
import Table from './components/Table'
import './App.css';
function App() {
  return (
    <div>
      <div>
        <NavigationBar />
        <Footer />
      </div>
      <div className = "Tablediv" >
        <Table />
      </div>
    </div>
  );
}

export default App;
