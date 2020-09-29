import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
// import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iphoneVector from './iphoneVectorBlack.png';
import iphoneVectorTwo from './iphoneVectorWhite.png';
import iphoneVectorThree from './iphoneVectorYellow.png';

// library.add(fab, faCheckSquare, faCoffee)


class App extends Component {

  constructor() {
    super();
    this.state = {
      // STORE USER INPUT HERE TO TRACK NEW STATE:
      userInput: "",
    }
  }


  // CREATING A FIREBASE REFERENCE: 
  componentDidMount() {
    const dbRef = firebase.database().ref();
    // DEFAULT LISTENER USED TO LISTEN TO VALUE CHANGE: 
    dbRef.on('value', (response) => {
    // EMPTY ARRAY TO STORE IN STATE: 
      const newState = [];
    // STORING OBJECT INTO A VARIABLE: 
      const data = response.val();

      for (const key in data) {
        newState.push({
          key: key, 
          title: data[key],
        })
      }
    });
  }


  render() {
    return (
      <div className="App">
        
        <header>
          <div className="jason wrapper">
            <h1><em>“J[A]SON  
              <div className="title">DERULOOOOO"</div></em></h1>
              <p>Tell us what's your favourite jam and why?</p>
            {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
          </div>
        </header>

        <section className="wrapper form">

        </section>

        <section className="entries">
          <div className="wrapper">
            <img src={iphoneVector} alt="Logo" />;
            <img src={iphoneVectorTwo} alt="Logo" />;
            <img src={iphoneVectorThree} alt="Logo" />;
          </div>
        </section>
      </div>
    );
  }
}

export default App;
