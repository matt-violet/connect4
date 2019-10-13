import React from 'react';

class GridCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [this.props.col, this.props.cell],
      taken: false
    }
  }

  render() {
    return (
      <div>
        <button 
          className='gridCell' 
          id={this.state.coordinates} 
          onClick={this.props.click} 
        />
      </div>
    )
  }
}

export default GridCell;
