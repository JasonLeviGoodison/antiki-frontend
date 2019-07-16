import React from 'react';
import { CompanyName } from '../App.js';
import Button from 'react-bootstrap/Button';
import Moreinfo from './Moreinfo';

function LandingPage() {
  return (
      <div>
        <div class="hero-image">
            <div class="hero-text">
            <div> {CompanyName} </div>
            <Button variant="outline-light" style={{marginRight: 20}}>Buy</Button>
            <Button variant="outline-light">Sell</Button>
            </div>
        </div>
        <Moreinfo/>
        </div>
  );
}

export default LandingPage;