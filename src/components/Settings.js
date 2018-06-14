import React, { Component } from 'react';
import '../styles/settings.css';

export default class Settings extends Component {
  renderScores() {
    return this.props.scores.map((score, index)=> {
      return <div key={'score'+index.toString()}>{`${score.name}: ${score.time}`}</div>
    })
  }

  render() {
    return(
      <div className="Settings">{this.renderScores()}</div>
    )
  }
}
