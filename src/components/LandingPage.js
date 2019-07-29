import React from 'react';
import { CompanyName } from '../App.js';
import Button from 'react-bootstrap/Button';
import Moreinfo from './Moreinfo';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
      <div>
        <div class="hero-image">
            <div class="hero-text">
            <div> {CompanyName} </div>
            <Link to='/buy'>
              <Button variant="outline-light" style={{marginRight: 20}}>Buy</Button>
            </Link>
            <Button variant="outline-light">Sell</Button>
            </div>
        </div>
        <Moreinfo/>
        </div>
  );
}

export default LandingPage;