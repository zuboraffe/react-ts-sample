import * as React from 'react';

interface SquareProps {
  value: string;
  number: number;
  onClick(i: number): void;
}
function Square(props: SquareProps) {
  return (
    <button className="square" onClick={() => props.onClick(props.number)}>
      {props.value}
    </button>
  );
}

interface BoardProps {
  squares: string[];
  onClick(i: number): void;
}
class Board extends React.Component<BoardProps> {
  renderSuare(i: number) {
    return (
      <Square
        value={this.props.squares[i]}
        number={i}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSuare(0)}
          {this.renderSuare(1)}
          {this.renderSuare(2)}
        </div>
        <div className="board-row">
          {this.renderSuare(3)}
          {this.renderSuare(4)}
          {this.renderSuare(5)}
        </div>
        <div className="board-row">
          {this.renderSuare(6)}
          {this.renderSuare(7)}
          {this.renderSuare(8)}
        </div>
      </div>
    );
  }
}

interface GameState {
  history: string[][];
  xIsNext: boolean;
}
class Game extends React.Component<{}, GameState> {
  constructor() {
    super({});
    this.state = {
      history: [Array(9).fill(null)],
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    const history = this.state.history;
    const current = history[history.length - 1];
    if (calculateWinner(current) || current[i]) {
      return;
    }
    current[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat(current),
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current);

    let status: string;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares: string[]) {
  const lines: number[][] = [
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

export default Game;