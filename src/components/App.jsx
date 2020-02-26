import React from 'react';
import Grid from './Grid';
import { checkForWinner } from '../solvers.js';
import WinningScreen from './WinningScreen';
import SignInScreen from './SignInScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      redIsNext: true,
      redPlayer: null,
      yellowPlayer: null
    }
    this.makeMove = this.makeMove.bind(this);
    this.createGrid = this.createGrid.bind(this);
    this.callCheckForWinner = this.callCheckForWinner.bind(this);
    this.declareWinner = this.declareWinner.bind(this);
    this.startOver = this.startOver.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    this.createGrid();
  }

  startGame(redPlayer, yellowPlayer) {
    this.setState({
      gameStarted: true,
      redPlayer,
      yellowPlayer
    })
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
    setTimeout(() => {
      this.setState({
        winner: true
      })
    }, 1200)
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
        <WinningScreen 
          makeMove={this.makeMove}
          grid={this.state.grid}
          gameStarted={this.state.gameStarted}
          callCheckForWinner={this.state.callCheckForWinner}
          startOver={this.startOver}
          winner={this.state.winner}
          redPlayer={this.state.redPlayer}
          yellowPlayer={this.state.yellowPlayer}
        />
      )
    }
    if (!this.state.redPlayer && !this.state.yellowPlayer) {
      return (
        <SignInScreen 
          startGame={this.startGame} 
        />
      )
    }
    if (!this.state.grid) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div className='grid'>
        <Grid 
          makeMove={this.makeMove} 
          grid={this.state.grid}
          gameStarted={this.state.gameStarted}
          callCheckForWinner={this.callCheckForWinner}
          redIsNext={this.state.redIsNext}
          redPlayer={this.state.redPlayer}
          yellowPlayer={this.state.yellowPlayer}
        />
      </div>
    )
  }
}

export default App;
