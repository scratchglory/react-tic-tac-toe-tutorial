import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// REPLACED WITH SQUARE CLASS
// class Square extends React.Component {
//   // to remember when clicked, to save the X
//     // constructor(props){
//     //   // must always call super when defining the constructor of a subclass
//     //   super(props);
//     //   this.state = {
//     //     value: null,
//     //   };
//     // }
  
//     render() {
//       return (
//         // Create a X when clicking on the square
//         // Change the button tag 
//         // <button className="square" onClick={() => this.setState({value: 'X'})} >
//         // changing the setState to onClick 
//         <button className="square" onClick={() => this.props.onClick()} >
//         {/* Change to show that value with {this.state.value} */}
//           {this.props.value}
//         </button>
//       );
//     }
//   }
  
  function Square(props){
    return(
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    )
  }

  class Board extends React.Component {
    // Creating the board to have state
    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      }
    }
    
    // Create a handleClick to handle the clicks below
    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
    }
    
    renderSquare(i) {
      // pass prop called value to the Square
      return <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  