import React from 'react';
import GridColumn from './GridColumn';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.click = this.click.bind(this);
  }

  click(e) {
    e.preventDefault();
    const coordinate = e.target.id;
    this.props.makeMove(coordinate);
  }

  render() {
    return (
      <div>
        <GridColumn col={1} click={this.click} />
        <GridColumn col={2} click={this.click} />
        <GridColumn col={3} click={this.click} />
        <GridColumn col={4} click={this.click} />
        <GridColumn col={5} click={this.click} />
        <GridColumn col={6} click={this.click} />
        <GridColumn col={7} click={this.click} />
      </div>
    )
  }
}

export default Grid;