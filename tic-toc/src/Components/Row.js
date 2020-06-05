import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class Row extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
            boardSize: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.createBoard(event.target.value)
    }

    createBoard(i) {
        this.props.data.setBoardsize(i);
        this.state.boardSize = i;
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
                    <div>
                        <label>
                            EnterLevel
                        </label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Row;