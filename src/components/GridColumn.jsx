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
        <GridCell cell={7} col={this.props.col} state={this.props.state} makeMove={this.props.makeMove} />
        <GridCell cell={6} col={this.props.col} state={this.props.state} makeMove={this.props.makeMove} />
        <GridCell cell={5} col={this.props.col} state={this.props.state} makeMove={this.props.makeMove} />
        <GridCell cell={4} col={this.props.col} state={this.props.state} makeMove={this.props.makeMove} />
        <GridCell cell={3} col={this.props.col} state={this.props.state} makeMove={this.props.makeMove} />
        <GridCell cell={2} col={this.props.col} state={this.props.state} makeMove={this.props.makeMove} />
        <GridCell cell={1} col={this.props.col} state={this.props.state} makeMove={this.props.makeMove} />
      </div>
      )
  }
}

export default GridColumn;
