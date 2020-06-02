import React, { Component } from 'react';
import Square from './Square';
import App from '../App'
class Board extends React.Component {
    state=App.state;


    renderSquare(i) {
        // this.state.boardSize
        return <Square value={i} />;
    }
   
    render() {
        console.log("state in board : ",this.state);
        
        return this.renderSquare(8);
    }
}

export default Board;