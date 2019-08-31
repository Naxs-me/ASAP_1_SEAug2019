import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Navigation_Bar';
class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    );
  }
}

export default App;