import React, { useState, useEffect } from 'react';
import { CompanyName } from '../App.js';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Buy() {

    const fetchItems = async () => {
        const items = await [
            {'name': 'Item1', 'price': 14.50, 'date': '1945'},
            {'name': 'Item2', 'price': 1.50, 'date': 'Unknown'},
            {'name': 'Item3', 'price': 1400.50, 'date': '1200'},
            {'name': 'Item4', 'price': 14, 'date': '2012'},
            {'name': 'Item5', 'price': 1.50, 'date': '2018'},
            {'name': 'Item6', 'price': 1400.50, 'date': 'Unknown'},
            {'name': 'Item7', 'price': 1.50, 'date': 'Unknown'},
            {'name': 'Item8', 'price': 1400.50, 'date': 'Unknown'},
            {'name': 'Item9', 'price': 1.50, 'date': 'Unknown'},
            {'name': 'Item10', 'price': 1400.50, 'date': 'Unknown'},
        ];
        setItems( items );
    }

    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            <h1 style={{paddingTop: 75}}>
                Recently added (Add options here)
            </h1>
            {items.map (item => (
                <div class="buy-item">
                    <Link to='/buy' >
                        <h1 class="buy-item-name"> { item.name } </h1>
                    </Link>
                    <h6 class="buy-item-other"> 
                        Price: { item.price } 
                    </h6>
                    <h6 class="buy-item-other"> 
                        Date: { item.date } 
                    </h6>
                </div>
            ))}
        </div>
    );
}

export default Buy;