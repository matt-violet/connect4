import React from 'react';

class GridCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [this.props.col, this.props.cell]
    }
  }

  componentWillUpdate() {
    if (this.props.state.currentCell) {
      let columnsMatch = (this.props.state.currentCell[0] === this.state.coordinates[0]);
      let cellsMatch = (this.props.state.currentCell[1] === this.state.coordinates[1]);
      console.log('columnsMatch: ', columnsMatch)
      console.log('cellsMatch: ', cellsMatch)
      if (columnsMatch && cellsMatch) {
        this.setState({
          color: this.props.state.redIsNext ? 'Red' : 'Yellow'
        })
      }
    }
  }

  render() {
    if (!this.state.color) {
      return (
        <div>
          <button 
            className='gridCell' 
            id={this.state.coordinates} 
            onClick={this.props.makeMove} 
          />
        </div>
      )
    } else {
      return (
        <div>
        <button 
          className={'gridCell' + this.state.color} 
          id={this.state.coordinates} 
        />
      </div>
      ) 
    }
  }
}

export default GridCell;
