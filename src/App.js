import React, { Component } from 'react';

import './App.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class App extends Component {

  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOption: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
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
