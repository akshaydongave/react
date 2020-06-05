import React from 'react';
import Square from './Square';

class Board extends React.Component {
    renderSquare(i) {
        return <Square squares={this.props.size} />;
    }
    render() {
        console.log("props : ",this.props.size);
        return  this.renderSquare()
    }
}

export default Board;