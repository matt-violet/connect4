import React from 'react';
import Grid from './components/Grid';
import { checkForWinner } from './solvers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redIsNext: true,
      gameStarted: false
    }
    this.makeMove = this.makeMove.bind(this);
    this.createGrid = this.createGrid.bind(this);
    this.callCheckForWinner = this.callCheckForWinner.bind(this);
    this.declareWinner = this.declareWinner.bind(this);
    this.startOver = this.startOver.bind(this);
  }

  componentDidMount() {
    this.createGrid();
  }

  callCheckForWinner() {
    if (this.state.movePlacement && !this.state.winner) {
      let grid = this.state.grid;
      let movePlacement = this.state.movePlacement;
      let currentCell = grid[movePlacement[0]][movePlacement[1]];
      let declareWinner = this.declareWinner;
      checkForWinner(grid, currentCell, movePlacement, declareWinner);
    }
  }

  declareWinner() {
    this.setState({
      winner: true
    })
  }

  createGrid() {
    let grid = [];
    for (let i = 0; i < 7; i++) {
      let column = [];
      for (let j = 0; j < 7; j++) {
        column.push({
          cellId: [i, j],
          color: 'noColor' 
        });
      }
      grid.push(column);
    }
    this.setState({grid});
  }

  makeMove(e) {
    const clickedCellColor = e.target.value;
    const updatedGrid = this.state.grid.slice();
    const currentCol = e.target.id[0];
    let movePlacement;

    if (this.state.winner) {
      return;
    }
    if (clickedCellColor !== 'noColor') {
      return;
    } else {
      for (let i = 6; i > -1; i--) {
        if (updatedGrid[currentCol][i].color === 'noColor') {
          movePlacement = updatedGrid[currentCol][i].cellId
        }
      }
      updatedGrid[movePlacement[0]][movePlacement[1]].color = this.state.redIsNext ? 'Red' : 'Yellow';

      this.setState({
        redIsNext: !this.state.redIsNext,
        grid: updatedGrid,
        gameStarted: true,
        movePlacement
      }) 
    }
  }

  startOver() {
    window.location.reload();
  }

  render() {
    if (this.state.winner) {
      return (
          <div className='grid'>
            <Grid 
              makeMove={this.makeMove} 
              grid={this.state.grid}
              gameStarted={this.state.gameStarted}
              callCheckForWinner={this.callCheckForWinner}
              />
            <br/>
            <h1>{this.state.redIsNext ? 'Yellow wins!!!' : 'Red wins!!!'}</h1>
            <br/>
            <button onClick={this.startOver}>
              Start Over
            </button>
          </div>
      )
    }
    if (!this.state.grid) {
      return (
        <div>loading...</div>
      )
    }
    return (
      <div className='grid'>
        <Grid 
          makeMove={this.makeMove} 
          grid={this.state.grid}
          gameStarted={this.state.gameStarted}
          callCheckForWinner={this.callCheckForWinner}
        />
        <br/>
        Next move: {this.state.redIsNext ? 'red' : 'yellow'}
      </div>
    );
  }
}

export default App;

