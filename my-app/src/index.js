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
        xIsNext: true, // to help flip turns
      }
    }
    
    // Create a handleClick to handle the clicks below
    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'X' : 'O'; // based on the boolean will determine value
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext, // when option is clicked on, it will flip the value
      });
    }
    
    renderSquare(i) {
      // pass prop called value to the Square
      return <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />;
    }
  
    render() {
      // change the display so it's either X or O
      // const status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;
      // call the helper function to dictate the winner
      const winner = calculateWinner(this.state.squares)
      let status;
      if (winner){
        status = `Winner: ${winner}`
      } else {
        status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
      }

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
  
  // helper function
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
