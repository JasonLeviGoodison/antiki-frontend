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
            dateOptions: ['Any', '<1900', '1900s', '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '>1970'],
            tagOptions: ['Buy', 'Value'],
            items: [],
            searchType: 'Any',
            searchTag: 'Buy',
            decade: 'Any',
        };
      }

    filterOptions = () => {
        instance.get('/items', {
            params: {
                type: this.state.searchType,
                tag: this.state.searchTag,
                decade: this.state.decade,
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

    onDateChange = (event) => {
        this.setState({
            decade: event.value
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
                    Discover
                </h1>
                <div className="filteringOptions">  
                    {/*<button onClick={}>Sign in</button> <span style={{ width: '100%'}}> Filtering options: </span> */}
                    <div style={{width: 'fit-content', display: 'flex'}}>
                        <div style={{width: 150}}>
                            Type:
                            <Dropdown options={this.state.typeOptions} value={this.state.searchType} onChange={this.onTypeChange}/>
                        </div>
                        <div style={{ marginLeft: '10px'}}>
                            Decade:
                            <Dropdown options={this.state.dateOptions} value={this.state.decade} onChange={this.onDateChange}/>
                        </div>
                        {/* {<div style={{ marginLeft: '10px'}}>
                            Buying or Valuing:
                            <Dropdown options={this.state.tagOptions} value={this.state.searchTag} onChange={this.onTagChange}/>
                        </div>} */}
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