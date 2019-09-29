import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import ItemComponent from '../components/ItemComponent';
import Item from '../classes/Item';
import Contact from '../classes/Contact';
//import * as firebase from 'firebase';

class Buy extends Component {
    constructor(props) {
        super(props);
        var fetchedItems = [
            new Item('Item10', 1300, '100BC', new Contact('Jason', '', 'jasongoodisondevelopment@gmail.com')),
            new Item('Item11', 130, '1990', new Contact('Sahir', '', 'sahir@gmail.com')),
            // {'name': 'Item1', 'price': 14.50, 'date': '1945'},
            // {'name': 'Item2', 'price': 1.50, 'date': 'Unknown'},
            // {'name': 'Item3', 'price': 1400.50, 'date': '1200'},
            // {'name': 'Item4', 'price': 14, 'date': '2012'},
            // {'name': 'Item5', 'price': 1.50, 'date': '2018'},
            // {'name': 'Item6', 'price': 1400.50, 'date': 'Unknown'},
            // {'name': 'Item7', 'price': 1.50, 'date': 'Unknown'},
            // {'name': 'Item8', 'price': 1400.50, 'date': 'Unknown'},
            // {'name': 'Item9', 'price': 1.50, 'date': 'Unknown'},
            // {'name': 'Item10', 'price': 1400.50, 'date': 'Unknown'},
        ];
        this.state = {
            typeOptions: ['Any', 'REALLY LONG TYPE', 'type2', 'type3', 'None'],
            tagOptions: ['Any', 'Sell', 'Value'],
            items: fetchedItems,
            displayItems: fetchedItems,
            defaultOption: 'Any'
        };
      }


    onTypeChange = (event) => {
        console.log("On type change")
        // filter the list
        if (event.value === 'None') {
            this.setState({displayItems: []})
        }
        if (event.value === 'Any') {
            this.setState({displayItems: this.state.items})
        }
    };

    onTagChange = () => {
        console.log("On tag change")
    };

    componentDidMount() {
        // const rootRef = firebase.database().ref().child('antiki');
        // const itemRef = rootRef.child('items');
        // itemRef.on('value', snap => {
        //     console.log("snapval is ", snap.val())
        //     this.setState({
        //     })
        // });
    }

    render() {
        console.log(this.state.displayItems)
        return (
            <div>
                <h1 style={{paddingTop: 75}}>
                    Recently added
                </h1>
                <div className="filteringOptions">  
                    {/*<button onClick={}>Sign in</button> <span style={{ width: '100%'}}> Filtering options: </span> */}
                    <div style={{width: 'fit-content', display: 'flex'}}>
                        <div>
                            Type:
                            <Dropdown options={this.state.typeOptions} value={this.state.defaultOption} onChange={this.onTypeChange}/>
                        </div>
                        <div style={{ marginLeft: '10px'}}>
                            Sell or Value
                            <Dropdown options={this.state.tagOptions} value={this.state.defaultOption} onChange={this.onTagChange}/>
                        </div>
                    </div>
                </div>
                {/* This is where you need to do filtering optionss*/}
                {this.state.displayItems && this.state.displayItems.map ((item, index) => (
                    <ItemComponent item={item} key={index}/>
                ))}
            </div>
        );
    }
}


export default Buy;