import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.alertUser = this.alertUser.bind(this)
  }

  alertUser() {
    axios.get('http://localhost:8080')
  }

  componentDidMount() {
    window.addEventListener('beforeunload', (e) => {
      e.preventDefault()
      this.alertUser()
    })
  }

  // remove eventlistener on window in componentWillUnmount!!!

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
