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
        <GridColumn col={1} state={this.props.state} makeMove={this.props.makeMove} />
        <GridColumn col={2} state={this.props.state} makeMove={this.props.makeMove} />
        <GridColumn col={3} state={this.props.state} makeMove={this.props.makeMove} />
        <GridColumn col={4} state={this.props.state} makeMove={this.props.makeMove} />
        <GridColumn col={5} state={this.props.state} makeMove={this.props.makeMove} />
        <GridColumn col={6} state={this.props.state} makeMove={this.props.makeMove} />
        <GridColumn col={7} state={this.props.state} makeMove={this.props.makeMove} />
      </div>
    )
  }
}

export default Grid;