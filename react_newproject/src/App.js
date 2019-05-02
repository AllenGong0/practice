import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './PropTypes'
// eslint-disable-next-line
import MyRef from './MyRef';
import CustomTextInput from './CustomTextInput';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greeting name={25}/>
        <CustomTextInput />
      </header>
    </div>
  );
}

export default App;
