import React, { Component } from 'react';
import '../styles/square.css';

export default class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedSquare: false
    }
  }

  componentDidUpdate() {
    if (this.state.clickedSquare && this.props.showBombs) {
      this.setState({clickedSquare: false})
    }
  }

  handleSquareClick = () => {
    this.checkForBomb()
  }

  checkForBomb = () => {
    if(this.props.isBomb){
      this.props.handleShowBombs()
    }
  }

  render() {
    if(this.state.clickedSquare && this.props.surroundingBombs > 0) {
      return (
        <div className="Square">
          {this.props.surroundingBombs}
        </div>
    )}
    else {
      return (
        <div
          className="Square"
          onClick={this.props.isBomb ? () => this.handleSquareClick() : () => this.setState({clickedSquare: true})}
        >
          {this.props.isBomb && this.props.showBombs ? '💣' : ''}
        </div>
      )
    }
  }
}
