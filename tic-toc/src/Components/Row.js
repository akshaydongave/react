import React, { Component } from 'react'
import App from '../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './Board';

 class Row extends Component {
    state={
        boardSize:0,
    }
    createBoard(i){
        console.log("*******",i);      
        this.props.data.setBoardsize(i);
        this.state.boardSize=i;
        console.log("!!!!!!!!!!!",this.props.data);
    }

    render() {
        return (
            <div>
            <div boardsize={this.state.boardsize}>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary" onClick={(e) => this.createBoard(3)}>3</button>
                    <button type="button" className="btn btn-primary" onClick={(e) => this.createBoard(5)}>5</button>
                    <button type="button" className="btn btn-primary" onClick={(e) => this.createBoard(9)}>9</button>
                </div>
            </div>
         </div>
        )
    }
}
export default Row;