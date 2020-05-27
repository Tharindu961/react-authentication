import React, { Component } from 'react';

import './App.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey:  "AIzaSyDMgho2QEZWQCI431FyWAlg-89qXTZ4WVc",
  authDomain: "fir-auth-react-9a4d0.firebaseapp.com"
})

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

  componentDidMount = () => {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })

  }


  render() {
  return (
    <div className="App">
      {this.state.isSignedIn ? (
        <div>Signed In!</div>
      ) : (
        <StyledFirebaseAuth 
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
   </div>
  )
  }
}

export default App;
