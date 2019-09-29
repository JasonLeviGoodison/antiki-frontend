import React from 'react';
import { CompanyName } from './App.js';
import Button from 'react-bootstrap/Button';
import Moreinfo from './Moreinfo';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
      <div>
        <div className="hero-image">
            <div className="hero-text">
            <div> {CompanyName} </div>
            <Link to='/buy'>
               <Button variant="outline-light" style={{marginRight: 20}}>Buy</Button>
            </Link>
            <Link to='/sell'>
              <Button variant="outline-light">Sell</Button>
            </Link>
            
            </div>
        </div>
        <Moreinfo/>
        </div>
  );
}

export default LandingPage;