import React from 'react';
import GridCell from './GridCell';

class GridColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='gridCol'>
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
      </div>
      )
  }
}

export default GridColumn;
