import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import ItemComponent from '../components/ItemComponent';
const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeOptions: ['Any', 'Jewlery', 'toys - break this down', 'equipment - break this down', 'silver/gold', 'Coins'],
            datetrange: ['<1900', '1900', '1910', '1920', '1930', '1940', '1950', '1960', '>1970'],
            tagOptions: ['Any', 'Sell', 'Value'],
            items: [],
            searchType: 'Any',
            searchTag: 'Any',
        };
      }

    filterOptions = () => {
        instance.get('/items', {
            params: {
                type: this.state.searchType,
                tag: this.state.searchTag,
            }
        })
        .then(response => {
            console.log(response)
            this.setState({
                items: response.data.items,
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

    onTypeChange = (event) => {
        this.setState({
            searchType: event.value,
        }, () => {
            this.filterOptions();
        });
    };

    onTagChange = (event) => {
        this.setState({
            searchTag: event.value
        }, () => {
            this.filterOptions();
        });
    };

    componentDidMount() {
        this.filterOptions();
    }

    render() {
        return (
            <div>
                <h1 style={{paddingTop: 75}}>
                    Find what you're looking for
                </h1>
                <div className="filteringOptions">  
                    {/*<button onClick={}>Sign in</button> <span style={{ width: '100%'}}> Filtering options: </span> */}
                    <div style={{width: 'fit-content', display: 'flex'}}>
                        <div>
                            Type:
                            <Dropdown options={this.state.typeOptions} value={this.state.searchType} onChange={this.onTypeChange}/>
                        </div>
                        <div style={{ marginLeft: '10px'}}>
                            Sell or Value
                            <Dropdown options={this.state.tagOptions} value={this.state.searchTag} onChange={this.onTagChange}/>
                        </div>
                    </div>
                </div>
                {/* This is where you need to do filtering optionss*/}
                {this.state.items.map ((item, index) => (
                    <ItemComponent item={item} key={index}/>
                ))}
            </div>
        );
    }
}

export default Buy;