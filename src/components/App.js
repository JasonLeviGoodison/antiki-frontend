import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Buy from './Buy';
import Sell from './Sell'
import SignInPage from "./account/SignIn";
import SignUpPage from "./account/SignUp"
import withAuthentication from "./account/withAuthentication";
import * as routes from "../constants/routes";

export var CompanyName = "Antiki"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path={routes.LANDING} component={LandingPage}/>
            <Route path={routes.BUY} component={Buy} />
            <Route path={routes.SELL} component={Sell} />
            <Route path={routes.SIGN_IN} component={SignInPage} />
            <Route path={routes.SIGN_UP} component={SignUpPage} />
            {/*<Route exact path="sell" component={Sell}/>*/}
          </Switch>
          <Footer/>
        </div>

      </Router>
    );
  }
}

export default withAuthentication(App);
