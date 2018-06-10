import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from "prop-types"
import { searchJokes } from '../actions/searchActions';
import { connect } from "react-redux"
import '../css/style.css'
import Footer from './footer';

let jokes;
let table;

class Home extends React.Component {

  trimInput = () => {
    var regex = /[^a-z ]/gi;
    let input = this._name.value.replace(regex, "");

    if (input != "") {
      this.props.searchJokes(input)
    }
  }

  render() {
    // if there are jokes
    if (typeof this.props.jokes !== 'undefined' && this.props.jokes.length > 0) {
      jokes = (
        this.props.jokes.map(joke => (
          <li>
          {joke.value}
          </li>
          )
        ))
        
    } else {
      jokes = (
        <div id="nojokes">
          No joke found       
        </div>
      )
    }
    return (
      <div id="container">
        <img src="/images/chuck_norris.png"  id="bg1"/>
        <div id="search">
        <input id="input" type="text" ref={input => this._name = input} placeholder="Search jokes..." />
        <input id="myBtn" type="submit" value="Search" onClick={this.trimInput} />
       </div>
        <ul id="jokes">
           {jokes}
        </ul>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  jokes: state.jokes.jokes
});


export default connect(mapStateToProps, { searchJokes })(Home);