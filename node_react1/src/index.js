import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import ContactUs from'./components/Contact_us';
const routing = (
    <Router>
      <div>
        <Route path="/Login" component={Login} />
        <Route exact path="/" component={App} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/ContactUs" component={ContactUs}/>
      </div>
    </Router>
  );
  ReactDOM.render(routing, document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
