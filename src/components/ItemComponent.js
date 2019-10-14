import React, { Component } from 'react';
import { Button } from 'reactstrap'

class ItemComponent extends Component {
    render() {
        const item = this.props.item;
        return (
            <div>
                <div className="buy-item">
                    <h1 className="buy-item-name"> { item.name } </h1>
                    <h6 className="buy-item-other" style={{float: 'right', textAlign: 'right'}}>
                        <Button color="primary" > Contact Seller </Button>
                        {/* Contact: <br/>
                        { item.contact.name } <br/>
                        { item.contact.email }  */}
                    </h6>
                    {/*Images can go here */}
                    <h6 className="buy-item-other"> 
                        Price: { item.price } 
                    </h6>
                    <h6 className="buy-item-other"> 
                        Date: { item.date } 
                    </h6>
                </div>
            </div>
        );
    }
}

export default ItemComponent;