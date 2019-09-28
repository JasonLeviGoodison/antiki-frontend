import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Buy from './components/Buy';
import Sell from './components/Sell'

export var CompanyName = "Antiki"
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/buy" component={Buy} />
          <Route path="/sell" component={Sell} />
          {/*<Route exact path="sell" component={Sell}/>*/}
        </Switch>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
