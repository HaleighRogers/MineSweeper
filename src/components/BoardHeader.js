import React, { Component } from 'react';
import '../styles/boardHeader.css';

export default class BoardHeader extends Component {

  render() {
    return(
      <div className="BoardHeader">
        <div className="StartNewGameButton" onClick={this.props.handleSetBombs}>
          New Game
        </div>
      </div>
    )
  }
}
