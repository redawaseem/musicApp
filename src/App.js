import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
// import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faCheckSquare, faCoffee)


class App extends Component {

  constructor() {
    super();
    this.state = {
      userInput: "",
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
  }

  render() {
    return (
      <div className="App">
        
        <header>
          <FontAwesomeIcon icon={['fab', 'apple']} />
      
          <h1>"J[A]SON  
            <div>DERULOOOOO"</div></h1>
            <p>Tell us what's your favourite jam and why?</p>
            
            
        </header>
      </div>
    );
  }
}

export default App;
