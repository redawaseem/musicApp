import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
// import axios from 'axios';
import iphoneVector from './iphoneVector.png';
import iphoneVectorOne from './iphoneVectorBlack.png';
import iphoneVectorTwo from './iphoneVectorWhite.png';
import iphoneVectorThree from './iphoneVectorYellow.png';


class App extends Component {

  constructor() {
    super();
    this.state = {
      // Store user input to track new state: 
      userInput: "",
      datas: [],
    }
  }

  // Create a firebase reference: 
  componentDidMount() {
    const dbRef = firebase.database().ref();
    // Default listener used to listen to value change: 
    dbRef.on('value', (response) => {
    // Empty array to store in state: 
      const newState = [];
    // Storing object into a variable: 
      const data = response.val();

      for (const key in data) {
        newState.push({
          key: key, 
          jam: data[key],
        })
      }

      // Update our React state for data
      this.setState({
        datas: newState, 
      })
    });
  }

  // Retrieve user input and update the userInput state: 
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value, 
    })
  }

  // Stop page refresh, take user input and store it into Firebase and then reset the input field:
  handleClick = (event) => {
    event.preventDefault();
    // Open portal to Firebase
    const dbRef = firebase.database().ref();
    // Add new record to Firebase
    dbRef.push(this.state.userInput);
    // Reset input field
    this.setState({
      userInput:'',
    });
  };

  // STRETCH GOAL: Removal of entry
  // Retrieve the specific data key and remove from Firebase (and website):
  handleRemove = (dataKey) => {
    // Open portal to Firebase
    const dbRef = firebase.database().ref();
    // Remove data stored in key
    dbRef.child(dataKey).remove(); 
  }


  render() {
    return (
      <div className="App">
        
        <header>
          <div className="jason wrapper">
            <h1><em>“J[A]SON  
              <div className="title">DERULOOOOO"</div></em></h1>
              <h2>Tell us what's your favourite jam and why?</h2>
              <div className="icon">
                <i className="bounce far fa-caret-square-down"></i>
              </div>
          </div>
        </header>

        {/* <section className="form">
          <div className="wrapper">
            <form>
              <textarea name="" id="" value={this.state.input} onChange={this.handleChange}>
              </textarea>
              <button className="record">
                Record it! 
              </button>
            </form>
          </div>
        </section> */}

        <section className="entries">
          <div className="wrapper">

          <form className="submit" action="submit">
            <label htmlFor="newEntry">Add the jam!</label>
            <textarea id="newJam" onChange={this.handleChange} value={this.state.userInput}></textarea>
            <button onClick={this.handleClick}>LET'S JAM!</button>
          </form>
            {/* Display entries */}
            <ul>
              {this.state.datas.map((data) => {
                return(
                  <div className="list">
                  <li key={data.key}>
                    <p>{data.jam}</p>
                    {/* Button to delete user input */}
                    <button onClick={() => this.handleRemove(data.key)}><span role="img" aria-label="delete emoji">❌</span></button>
                  </li>
                </div>
                )
              })
            }
          </ul>
          <img src={iphoneVector} alt="Logo" />;
            <img src={iphoneVectorOne} alt="Logo" />;
            <img src={iphoneVectorTwo} alt="Logo" />;
            <img src={iphoneVectorThree} alt="Logo" />;
          </div>
        </section>
      </div>
    );
  }
}

export default App;
