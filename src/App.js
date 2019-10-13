import React from 'react';
import Grid from './components/Grid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redIsNext: true,
      gameStarted: false,
      gridState: [
        Array(7).fill(null),
        Array(7).fill(null),
        Array(7).fill(null),
        Array(7).fill(null),
        Array(7).fill(null),
        Array(7).fill(null),
        Array(7).fill(null)
      ]
    }
    this.makeMove = this.makeMove.bind(this);
  }

  makeMove(e) {
    const coordinates = e.target.id;
    const updatedGrid = this.state.gridState.slice();
    const clickedCell = updatedGrid[coordinates[0]-1][coordinates[2]-1];
    let currentCell = [parseInt(coordinates[0], 10), parseInt(coordinates[2], 10)];    

    if (clickedCell !== null) {
      return;
    } else {
      updatedGrid[coordinates[0]-1][coordinates[2]-1] = this.state.redIsNext ? 'red' : 'yellow';
    }

    this.setState({
      redIsNext: !this.state.redIsNext,
      gridState: updatedGrid,
      gameStarted: true,
      currentCell
    }) 
  }

  render() {
    return (
      <div className='grid'>
        <Grid makeMove={this.makeMove} state={this.state} />
        <br/>
        Next move: {this.state.redIsNext ? 'red' : 'yellow'}
      </div>
    );
  }
}

export default App;
