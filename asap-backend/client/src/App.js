import React from 'react';
import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
import NavigationBar from './Components/Navigation_Bar';
import LoginPage from './Components/Login';
import SignUpPage from './Components/SignUp';
import './App.css';
function App() {
  return (
    <div>
      <NavigationBar/>
    </div>
  );
}

export default App;
