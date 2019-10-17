import React from 'react';

class GridCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cellId: [this.props.colId, this.props.cellId],
      color: this.props.color
    }
    this.generateKey = this.generateKey.bind(this);
  }

  componentDidUpdate() {
    this.props.callCheckForWinner();
  }

  generateKey() {
    let cellId = this.state.cellId;
    let col = cellId[0].toString();
    let cell = cellId[1].toString();
    let key = col.concat(cell);
    return key;
  }

  render() {
    return (
      <div className='gridCellnoColor'>
        <button 
          className={'gridCell' + this.props.color} 
          id={this.state.cellId}
          value={this.props.color} 
          onClick={this.props.makeMove} 
        />
      </div>
    )
  }
}

export default GridCell;

