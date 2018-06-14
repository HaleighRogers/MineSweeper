import React, { Component } from 'react';
import '../styles/board.css';
import Square from './Square';

export default class Board extends Component {

  renderRow(rowCount) {
    let gameRow = []
    let count = 0
    while ((this.props.columnCount - count) !== 0){
      gameRow.push(<Square key={'square' + count} id={this.props.squares[count].id}/>)
      count++
    }
    return <div className="Row" key={'row' + rowCount}>{gameRow}</div>
  }

  renderBoard() {
    let count = 0
    let row = []
    while (count < this.props.rowCount){
      row.push(this.renderRow(count))
      count++
    }
    return row
  }

  render() {
    return(
      <div className="Board">
        {this.renderBoard()}
      </div>
    )
  }
}
