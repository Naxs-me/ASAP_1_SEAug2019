import React from 'react';
import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
import NavigationBar from './components/Navigation_Bar';
import LoginPage from './components/Login';
import SignUpPage from './components/SignUp';
import './App.css';
function App() {
  return (
    <div>
      <NavigationBar/>
    </div>
  );
}

export default App;
