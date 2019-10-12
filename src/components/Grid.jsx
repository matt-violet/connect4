import React from 'react';
import GridColumn from './GridColumn';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <GridColumn />
        <GridColumn />
        <GridColumn />
        <GridColumn />
        <GridColumn />
        <GridColumn />
        <GridColumn />
      </div>
    )
  }
}

export default Grid;