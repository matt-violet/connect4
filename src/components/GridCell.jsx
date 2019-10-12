import React from 'react';

class GridCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taken: false
    }
  }

  onHover() {

  }

  render() {
    return (
      <div className='gridCell'>
      </div>
      )
  }
}

export default GridCell;
