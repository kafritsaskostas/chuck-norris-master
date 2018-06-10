import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { connect } from "react-redux";

// components 
import Home from './home';


export default class Header extends React.Component {
    render() {
        return (<BrowserRouter> 
        <div id="main-container">
             <div id="header">
                    <h1>CHUCK NORRIS JOKES</h1>
            </div>
            <Route path="/" component={Home} exact />
        </div> 
                
        </BrowserRouter>)
    }
}


