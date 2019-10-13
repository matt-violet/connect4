import React from 'react';
import Grid from './components/Grid';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      redIsNext: true
    }
    this.makeMove = this.makeMove.bind(this);
  }

  makeMove(e) {
    this.setState({
      redIsNext: !this.state.redIsNext
    })
    const coordinate = e.target.id;
    console.log(coordinate)
  }

  render() {
    return (
      <div className='grid'>
        <Grid makeMove={this.makeMove} />
        <br/>
        Next move: {this.state.redIsNext ? 'red' : 'yellow'}
      </div>
    );
  }
}

export default App;
