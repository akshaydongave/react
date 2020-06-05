
import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board';
import Row from './Components/Row'
class App extends React.Component {
  size = 3;
  state = {
    boardsize: this.size,
  }
  setBoardsize(i) {
    console.log("##########", i);
    this.size = i;
    this.setState({
      boardsize:this.size
    })
    console.log("state : ",this.state); 
  }
  render() {
    console.log("props in app", this.props);

    return (
      <div id="game">
        <div id="head">
          Its a demo game.....{this.state.boardsize}
        </div>
        <div id="root">
          <Row data={
            { setBoardsize: this.setBoardsize.bind(this) }
          } /><br/>
          <Board size={this.state.boardsize} />
        </div>
      </div>
    );
  }
}
export default App;
