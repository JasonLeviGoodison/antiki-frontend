import React from 'react';
import { CompanyName } from '../App.js';

function Moreinfo() {
  return (
    <div className="moreinfo" >
        <div style={{ margin: 70}} >
            <h4>What is {CompanyName} </h4>
            <p style={{ margin: 25 }} >
                {CompanyName} is an online platform for buying and selling antiques.
                You can sell the antique you have lying around your house for a few extra bucks
                or you can try to buy the perfect piece that will tie a room together.
            </p>
        </div>
        <div class="parallax"> </div>
        <div style={{margin: 70}} >
            <h4> Technology </h4>
            <p style={{ margin: 25 }} >
                Most antique websites are themselves antiques. Antiki uses new, cutting edge technologies
                to get you set up with new antiques as quickly as possible.
            </p>
        </div>
    </div>
  );
}

export default Moreinfo;