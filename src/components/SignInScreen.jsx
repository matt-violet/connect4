import React from 'react';

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redPlayer: null,
      yellowPlayer: null,
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
      <div>
        Choose your side:
        <br/>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Red:
            <br/>
            <input placeholder='Enter player 1 name' value={this.state.redPlayer} name='redPlayer' onChange={this.handleChange} />
          </label>
          <br/>
          <br/>
          <label>
            Yellow:
            <br/>
            <input placeholder='Enter player 2 name' value={this.state.yellowPlayer} name='yellowPlayer' onChange={this.handleChange} />
          </label>
          <br/>
          <br/>
          <br/>
          <input type='submit' value='Start Game' />
        </form>
      </div>
    )
  }
} 

export default SignInScreen;