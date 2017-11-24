import * as React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import { MyFuncComponent, MyFuncComponent2 } from './components/MyFuncComponent';
import Game from './components/Game';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <hr />
        <MyComponent greeting="Hello!!!" />
        <hr />
        <MyFuncComponent greeting="HelloFunc" />
        <hr />
        <MyFuncComponent2 greeting="HelloFunc2" />
        <hr />
        <Game />
      </div>
    );
  }
}

export default App;
