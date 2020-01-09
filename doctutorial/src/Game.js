import React from 'react';
import Board from './Board';
import Winner from './Winner';
import Square from './Square';
import './style.css';
export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history:[
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }
    handleClick(i) {
        const history = this.state.history.slice(0,this.state.stepNumber + 1)
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(Winner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    } 
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }
    render() {
        const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner1 = Winner(current.squares);

      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
      let status;
      if (winner1) {
        status = "Winner: " + winner1;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game" >
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div><h3><i>{status}</i></h3></div>
            <ol><h4>{moves}</h4></ol>
          </div>
        </div>
      );


    }
}