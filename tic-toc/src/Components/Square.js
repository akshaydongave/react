import React from 'react';

class Square extends React.Component {
    size = 0;
    str=""
    boarSize=0
    className="board_"
    constructor() {
        super();
        
        this.state = {
            turn: 'x',
            boarSize:this.size,
            gameEnded: false,
            board: Array(9).fill(''),
        }
    }
    setboardSize(i){
      this.setState({boarSize:this.props.squares})
    }
    boardClicked(event) {
        console.log("event on board : ", event.target);
        console.log("event on board : ", this.state.turn);
        console.log("event on board : ", this.state.turn);

        this.state.board[event.target.dataset.square] = this.state.turn;

        event.target.innerText = this.state.turn;
        this.setState({
            turn: this.state.turn == 'x' ? 'o' : 'x',
            board: this.state.board
        })
        console.log("2:", this.state.board);
    }
    componentWillMount (){
      this.setState({boarSize:this.props.squares})
    }
    render() {        
        this.boarSize=this.props.squares * this.props.squares;
        const elements=Array(this.boarSize).fill('');
        const items = []
        for (const [index, value] of elements.entries()) {
          items.push(<div key={index} className='square' data-square={index}></div> 
          )
        }
      
        return (
          // id={this.className + this.props.squares} if we need to add id
          <div  className="wrap" style={{width:this.props.squares*100}} onClick={(e) => this.boardClicked(e)}>
            {items}
          </div>
        )
      }
}

export default Square;