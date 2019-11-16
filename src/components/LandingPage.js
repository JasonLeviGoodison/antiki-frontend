import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Moreinfo from './Moreinfo';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';


class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			typeOptions: ['Any', 'Jewlery', 'toys - break this down', 'equipment - break this down', 'silver/gold', 'Coins'],
			dateOptions: ['Any', '<1900', '1900s', '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '>1970'],
			tagOptions: ['Buy', 'Value'],
			items: [],
			searchType: 'Coins',
			searchTag: 'Buy',
			decade: 'Any',
		};
	}

	onDateChange = (event) => {
		this.setState({
			decade: event.value
		})
	};

	onTypeChange = (event) => {
		this.setState({
			searchType: event.value,
		});
	};

  render() {
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
                        <Dropdown options={this.state.typeOptions} value={this.state.searchType} onChange={this.onTypeChange}/>
                      </div>
                      <div style={{ color: 'white'}}>
                        Decade
                        <Dropdown options={this.state.dateOptions} value={this.state.decade} onChange={this.onDateChange}/>
                      </div>
                  </div>
                  <Link to={{
                    pathname: '/buy',
                    state: {
					  searchType: this.state.searchType,
					  decade: this.state.decade
                    }
                  }}>
                    <Button variant="outline-light">Discover</Button>
                  </Link>
              </div>
              
          </div>
          <Moreinfo/>
          </div>
    );
  }
}

export default LandingPage;
