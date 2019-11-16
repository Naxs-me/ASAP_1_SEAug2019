import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import ContactUs from'./components/Contact_us';
import Lodge from './components/Lodge';
import profile from'./components/profile';
import Status from './components/Status';

var session = {};

function sessionHandler(sessionData){
  session = sessionData;
  console.log("In index: ",session);
}

function getSession(){
  return session;
}

const routing = (
    <Router>
      <Switch>
        <Route path="/Login">
          <Login addSession={sessionHandler}/>
        </Route>
        <Route exact path="/">
          <App session = {getSession} addSession={sessionHandler}/>
        </Route>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/ContactUs" component={ContactUs}/>
        <Route path = "/Lodge" component = {Lodge}/>
        <Route path = "/Status" component = {Status}/>
      </Switch>
    </Router>
  );
  ReactDOM.render(routing, document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
