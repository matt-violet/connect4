import React from 'react';
import Grid from './components/Grid';

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
    const clickedCellId = [parseInt(e.target.id[0], 10), parseInt(e.target.id[2], 10)];    
    const updatedGrid = this.state.grid.slice();

    if (clickedCellColor !== 'noColor') {
      return;
    } else {
      updatedGrid[clickedCellId[0]][clickedCellId[1]].color = this.state.redIsNext ? 'Red' : 'Yellow';
     
      this.setState({
        redIsNext: !this.state.redIsNext,
        grid: updatedGrid,
        gameStarted: true,
        currentCell: clickedCellId
      }) 
    }
  }

  render() {
    if (!this.state.grid) {
      return (
        <div>loading...</div>
      )
    }
    return (
      <div className='grid'>
        <Grid 
          makeMove={this.makeMove} 
          currentCell={this.state.currentCell} 
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

