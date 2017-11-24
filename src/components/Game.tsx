import * as React from 'react';

interface SquareProps {
  value: string;
  onClick(): void;
}
class Square extends React.Component<SquareProps> {
   render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

interface BoardState {
  squares: string[];
}
class Board extends React.Component<{}, BoardState> {
  constructor() {
    super({});
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i: number) {
    const squares: string[] = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSuare(i: number) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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

export default Game;