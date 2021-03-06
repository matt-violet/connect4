import React from 'react';

class WinningScreen extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      winningPlayer: null 
    }
  }

  componentDidMount() {
    this.setState({
      winningPlayer: this.props.winner
    })
  }

  render() {
    if (!this.props.winner) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div className='winning-screen animatedParent'>   
        <h1 className='animated bounceIn'>
          {this.props.redIsNext ?
            this.props.yellowPlayer + ' wins!' :
            this.props.redPlayer + ' wins!'}
        </h1>
        <br/>
        <button className='btn' onClick={this.props.startOver}>
          Rematch
        </button>
      </div>
    )
  }
}

export default WinningScreen;
