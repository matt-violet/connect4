import React from 'react';
import GridCell from './GridCell';

class GridColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cellIds: []
    }
    this.createCells = this.createCells.bind(this);
  }

  componentDidMount() {
    this.createCells();
  }

  createCells() {
    let cellIds = [];
    for (let i = 6; i > -1; i--) {
      cellIds.push(i);
    }
    this.setState({cellIds})
  }

  render() {
    if (!this.state.cellIds) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div className='gridCol'>
        {this.state.cellIds.map(cell => {
          return <GridCell 
            key={[this.props.colId, cell]}
            cellId={cell} 
            colId={this.props.colId} 
            color={this.props.grid[this.props.colId][cell].color}
            makeMove={this.props.makeMove} 
            grid={this.props.grid}
            callCheckForWinner={this.props.callCheckForWinner}
          />
        })}
      </div>
    )
  }
}

export default GridColumn;

