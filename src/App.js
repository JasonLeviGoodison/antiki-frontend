import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router,/* Switch,*/ Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';


export var CompanyName = "Antiki"
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" component={LandingPage}/>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
