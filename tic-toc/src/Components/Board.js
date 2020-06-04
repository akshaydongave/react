import React, { Component } from 'react';
import Square from './Square';
import App from '../App'

class Board extends React.Component {
    size=this.props.size
    renderSquare(i) {
        // this.state.boardSize
        console.log("props : ",this.props.size);
            
        return <Square squares={this.size} />;
    }
   
    render() {
        return  this.renderSquare()

    }
}

export default Board;