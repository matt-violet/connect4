import React from 'react';
import Grid from './components/Grid';
import WinnerScreen from './components/WinnerScreen';
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
  }

  componentDidMount() {
    this.createGrid();
  }

  componentDidUpdate() {
    if (this.state.movePlacement) {
      let grid = this.state.grid;
      let movePlacement = this.state.movePlacement;
      let currentCell = grid[movePlacement[0]][movePlacement[1]];
      let redIsNext = this.state.redIsNext;
      checkForWinner(grid, currentCell, movePlacement, redIsNext);
    }
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

  render() {
    if (this.state.winner) {
      return (
        <WinnerScreen 
          player={this.state.redIsNext}
        />
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
        />
        <br/>
        Next move: {this.state.redIsNext ? 'red' : 'yellow'}
      </div>
    );
  }
}

export default App;

