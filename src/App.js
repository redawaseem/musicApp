import React, { Component } from 'react';
import './App.css';
// Import of firebase Component
import firebase from './firebase';
// Import Header Component
import Header from './Components/Header';
// Import Footer Component
import Footer from './Components/Footer';
// Import of iphones holding user input information
import iphoneVectorMain from './iphoneVectorMain.png';
// Import of error styling 
import swal from 'sweetalert';


class App extends Component {

  constructor() {
    super();
    this.state = {
      // Store user input to track new state: 
      userInput: '',
      datas: [],
    }
    // Scroll reference
    this.myRef = React.createRef();
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

  // Function created for scroll from "let's jam" button to entry
  scrollToMyRef = () => {
    window.scrollTo(0, this.myRef.current.offsetTop)
  }


  // Stop page refresh, take user input and store it into Firebase and then reset the input field:
  handleClick = (event) => {
    event.preventDefault();

    // Error handling for empty textarea
    if (this.state.userInput !== '') {
      // Open portal to Firebase
      const dbRef = firebase.database().ref();
      // Add new record to Firebase
      dbRef.push(this.state.userInput);
      // Reset input field
      this.setState({
        userInput:'',
      });
      // Calling the scroll function 
      this.scrollToMyRef()

    } else {
      swal('Wait a sec! We wanna dance too! Please write your answer to the question in the box!')
    }
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
        
        <Header />

        <section className="entries">
          <div className="wrapper">
            <form className="submit" action="">
              
              <label htmlFor="newEntry"></label>
              
              <textarea placeholder="Write your favourite song here..." id="newJam" onChange={this.handleChange} value={this.state.userInput}></textarea>
              
              <button className="jam" onClick={this.handleClick}>LET'S JAM!</button>

            </form>

              <ul ref={this.myRef} className="listOfEntries">
                {this.state.datas.map((data) => {
                  return(
                    <li className ="listStyle" key={data.key}>

                      <div className="container">
                        <div className="bottom">
                          <img className="iphone" src={iphoneVectorMain} alt="iphone" />
                        </div>

                        <div className="top">
                          <div onClick={() => this.handleRemove(data.key)}><i class="fas fa-trash"></i><span className="remove"> Click to Remove</span></div>
                          <p className="userAnswer">{data.jam}</p>
                        </div>
                      </div>

                    </li>
                  )
                })}
              </ul>
          </div>
        </section>

        <Footer />

      </div>
    );
  }
}

export default App;
