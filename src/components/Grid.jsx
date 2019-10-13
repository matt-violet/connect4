import React from 'react';
import GridColumn from './GridColumn';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.createColumns = this.createColumns.bind(this);
  }

  componentDidMount() {
    if (!this.props.gameStarted) {
      this.createColumns();
    }
  }

  createColumns(){
    let columnIds = [];
    for (let i = 0; i < 7; i++) {
      columnIds.push(i);
    }
    this.setState({columnIds})
  }

  render() {
    if (!this.state.columnIds) {
      return (
        <div>loading...</div>
      )
    }
    return (
      <div>
        {this.state.columnIds.map(col => {
          return <GridColumn 
            colId={col} 
            key={col}
            currentCell={this.props.currentCell} 
            makeMove={this.props.makeMove} 
            grid={this.props.grid}
          />
        })}
      </div>
    )
  }
}

export default Grid;

