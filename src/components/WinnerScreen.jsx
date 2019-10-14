import React from 'react';

function WinnerScreen(props) {
  return (
    <div>
      <h1>{props.redIsNext ? 'Yellow' : 'Red'} wins!!!</h1>
    </div>
  )
}

export default WinnerScreen;