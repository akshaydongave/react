import React, { Component } from 'react';
import Square from './Square';
import App from '../App'
class Board extends React.Component {
    renderSquare(i) {
        // this.state.boardSize
        return <Square/>;
    }
   
    render() {
        return  this.renderSquare()

    }
}

export default Board;