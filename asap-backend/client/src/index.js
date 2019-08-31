import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))


//ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
