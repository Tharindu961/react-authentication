import React, { Component } from 'react';

import './App.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class App extends Component {
  state = { isSignedIn: false }
  render() {
  return (
    <div className="App">
      {this.state.isSignedIn ? (
        <div>Signed In!</div>
      ) : (
        <div>NOt Signed In!</div>
      )}
    </div>
  )
  }
}

export default App;
