import React from 'react';

class GridCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cellId: [this.props.colId, this.props.cellId],
      color: this.props.color
    }
  }

  componentDidUpdate() {
    this.props.callCheckForWinner();
  }

  render() {
    return (
      <div>
        <button 
          className={'gridCell' + this.props.color} 
          id={this.state.cellId}
          value={this.props.color} 
          onClick={this.props.makeMove} 
        />
        <br/>
      </div>
    )
  }
}

export default GridCell;

