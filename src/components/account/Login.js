import React, { useState, useEffect, Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

class Login extends Component {
    constructor(props) {
        super(props);
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div>
                Login Page
            </div>
        );
    }
}


export default Login;