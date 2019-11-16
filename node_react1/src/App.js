import React from 'react';
import NavigationBar from './components/Navigation_Bar';
import Navigation_Bar1 from './components/Navigation_Bar1';
import Footer from './components/Footer';
import Table from './components/Table';
import './App.css';
class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    console.log("in App : ",this.props.session());
    return (
      <div>
        <div>
          <NavigationBar session={this.props.session()} addSession={this.props.addSession}/>
          <Footer />
        </div>
        <div className = "Tablediv" >
          <Table />
        </div>
      </div>
    );
  }
}

export default App;