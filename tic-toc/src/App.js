
import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board';
import Row from './Components/Row'
class App extends Component {
  size = '3';
  state = {
    size_3: Array(this.size).fill(''),
    boardsize: this.size,
  }
  setBoardsize(i) {
    console.log("##########", i);
    this.size = i;

  }


  render() {
    console.log("props in app", this.props);

    return (
      <div id="game">
        <div id="head">
          Its a demo game.....{this.props.boardsize}
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
