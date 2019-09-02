import React from 'react';
import NavigationBar from './components/Navigation_Bar';
import Footer from './components/Footer';
import Table from './components/Table';
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
