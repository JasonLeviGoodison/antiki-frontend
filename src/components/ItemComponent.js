import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Modal } from 'react-bootstrap';

class ItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContact: false
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }
    handleClose() {
        this.setState({showContact: false});
    }
    handleOpen() {
        this.setState({showContact: true});
    }
    render() {
        const item = this.props.item;
        return (
            <div>
                <div className="buy-item">
                    <h1 className="buy-item-name"> { item.name } </h1>
                    <h6 className="buy-item-other" style={{float: 'right', textAlign: 'right'}}>
                        <Button color="primary" onClick={this.handleOpen}> Contact Seller </Button>
                        <Modal show={this.state.showContact} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Contact Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Name: {item.contact.name} <br/>
                                Phone number: {item.contact.phone}<br/>
                                Email: {item.contact.email}
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
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
                    <h6 className="buy-item-other"> 
                        Type: { item.type } 
                    </h6>
                </div>
            </div>
        );
    }
}

export default ItemComponent;