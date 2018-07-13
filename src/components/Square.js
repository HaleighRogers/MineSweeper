import React, { Component } from 'react';
import '../styles/square.css';

export default class Square extends Component {
  constructor(props) {
    super(props)
  }

  handleSquareClick = () => {
    this.checkForBomb()
  }

  checkForBomb = () => {
    if(this.props.isBomb){
      console.log("💣💣💣💣💣💣💣💣💣💣💣💣💣💣")
    }
  }

  render() {
    return(
      <div 
        className="Square" 
        onClick={this.handleSquareClick}
      >
        {this.props.isBomb ? "💣" : "🤠"}
      </div>
    )
  }
}
