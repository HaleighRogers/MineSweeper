import React, { Component } from 'react';
import '../styles/square.css';

export default class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {clicked: false}
  }

  componentDidUpdate() {
    if (this.state.clicked && this.props.showBombs) {
      this.setState({clicked: false})
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

  // BUG: shows all squares with surrounding bombs and we just want to
  // keep the ones displayed that have been clicked whenever a bomb is clicked
  render() {
    if(this.state.clicked && this.props.surroundingBombs > 0) {
      return (
        <div className="ClickedSquare">
          {this.props.surroundingBombs}
        </div>
    )} else if (this.state.clicked && this.props.surroundingBombs === 0) {
      return (
        <div className="ClickedSquare"/>
    )} else {
      return (
        <div
          className="Square"
          onClick={this.props.isBomb ? () => this.handleSquareClick() : () => this.setState({clicked: true})}
        >
          {this.props.isBomb && this.props.showBombs ? '💣': ''}
          {this.props.surroundingBombs && this.props.showBombs
            ? this.props.surroundingBombs: ''}
        </div>

      )
    }
  }
}
