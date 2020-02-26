import React from 'react';
import GridColumn from './GridColumn';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnIds: []
    }
    this.createColumns = this.createColumns.bind(this);
  }

  componentDidMount() {
    if (this.props.gameStarted) {
      this.createColumns();
    }
  }

  createColumns() {
    let columnIds = [];
    for (let i = 0; i < 7; i++) {
      columnIds.push(i);
    }
    this.setState({columnIds})
  }

  render() {
    if (!this.state.columnIds) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div className="animatedParent">
        <div className="animated fadeInUp">
          {this.state.columnIds.map(col => {
            return <GridColumn
            colId={col} 
            key={col}
            makeMove={this.props.makeMove} 
            grid={this.props.grid}
            callCheckForWinner={this.props.callCheckForWinner}
            />
          })}
          <br/>
          <br/>
          <div className="next-move">
            Next move: 
            <div className={this.props.redIsNext ? "red" : "yellow"}>
              {this.props.redIsNext ? this.props.redPlayer : this.props.yellowPlayer}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Grid;
