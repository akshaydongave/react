import React, { Component } from 'react';


class Square extends React.Component {
    constructor() {
        super();
        this.state = {
            turn: 'x',
            gameEnded: false,
            board: Array(9).fill(''),
        }
    }

    boardClicked(event) {
        console.log("event on board : ", event.target);
        console.log("event on board : ", this.state.turn);
        console.log("event on board : ", this.state.turn);

        // console.log("1:",this.state.board[event.target.dataset.square]);
        this.state.board[event.target.dataset.square] = this.state.turn;

        event.target.innerText = this.state.turn;
        // if (event.target.innerText === "") {
        this.setState({
            turn: this.state.turn == 'x' ? 'o' : 'x',
            board: this.state.board
        })
        console.log("2:", this.state.board);
        // }


    }
    render() {
        return (
            <div id="board" onClick={(e) => this.boardClicked(e)}>
                <div className="square" data-square="0"></div>
                <div className="square" data-square="1"></div>
                <div className="square" data-square="2"></div>
                <div className="square" data-square="3"></div>
                <div className="square" data-square="4"></div>
                <div className="square" data-square="5"></div>
                <div className="square" data-square="6"></div>
                <div className="square" data-square="7"></div>
                <div className="square" data-square="8"></div>
            </div>
        );
    }
}

export default Square;