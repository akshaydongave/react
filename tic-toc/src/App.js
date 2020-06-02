  
import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board';

class App extends Component {

  render() {
    return (
      <div id="game">
        <div id="head">
          Its a demo game.....
      </div>
        <div>
         <Board />
        </div>
      </div>
    );
  }
}
export default App;
