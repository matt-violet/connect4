import React from 'react';

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redPlayer: '',
      yellowPlayer: '',
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.startGame(this.state.redPlayer, this.state.yellowPlayer);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='animatedParent'>
        <div className='sign-in-div animated bounceIn'>
        <h3>Choose your side</h3>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Red:
            <input
              className='player-input'
              placeholder='Player 1'
              value={this.state.redPlayer}
              name='redPlayer'
              onChange={this.handleChange}
              />
          </label>
          <br/>
          <label>
            Yellow:
            <input
              className='player-input'
              placeholder='Player 2'
              value={this.state.yellowPlayer}
              name='yellowPlayer'
              onChange={this.handleChange}
              />
          </label>
          <br/>
          <br/>
          <br/>
          <input
            className='btn'
            type='submit'
            value='Start Game'
            />
        </form>
        </div>
      </div>
    )
  }
} 

export default SignInScreen;
