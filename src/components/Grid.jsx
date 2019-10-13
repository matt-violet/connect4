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
        <GridColumn col={1} makeMove={this.props.makeMove} />
        <GridColumn col={2} makeMove={this.props.makeMove} />
        <GridColumn col={3} makeMove={this.props.makeMove} />
        <GridColumn col={4} makeMove={this.props.makeMove} />
        <GridColumn col={5} makeMove={this.props.makeMove} />
        <GridColumn col={6} makeMove={this.props.makeMove} />
        <GridColumn col={7} makeMove={this.props.makeMove} />
      </div>
    )
  }
}

export default Grid;