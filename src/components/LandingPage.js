import React from 'react';
import Button from 'react-bootstrap/Button';
import Moreinfo from './Moreinfo';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';

function LandingPage() {
  var typeOptions = ['Any', 'Jewlery', 'toys - break this down', 'equipment - break this down', 'silver/gold', 'Coins'];
  var dateOptions = ['Any', '<1900', '1900s', '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '>1970'];
  var searchType = 'Any';
  var decade = 'Any';
  return (
      <div>
        <div className="hero-image" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div className="hero-text">
              <div> Discover what you're missing </div>
            </div>
            <div style={{width: 'fit-content', display: 'flex', flexDirection: 'column'}}>
                <div style={{ display: 'flex', marginBottom: '10px', color: 'white' }}>
                    <div style={{marginRight: '10px'}}>
						Type
                      <Dropdown options={typeOptions} value={searchType}/>
                    </div>
					<div style={{ color: 'white'}}>
						Decade
						<Dropdown options={dateOptions} value={decade}/>
					</div>
                </div>
                <Link to='/buy'>
                  <Button variant="outline-light">Discover</Button>
                </Link>
            </div>
            
        </div>
        <Moreinfo/>
        </div>
  );
}

export default LandingPage;