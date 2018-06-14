import React, { Component } from 'react';
import '../styles/board.css';
import Square from './Square';

const rows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

export default class Board extends Component {
  renderRow(row) {
    let gameRow = columns.map((column, index)=> {
        return <Square key={'square'+index.toString()}
          id={(row+column).toString()}/>
      })
    return <div className="Row" key={row}>{gameRow}</div>
  }

  renderBoard() {
    return(
      rows.map((row, index)=> {
        return this.renderRow(row)
      })
    )
  }

  render() {
    return(
      <div className="Board">
        {this.renderBoard()}
      </div>
    )
  }
}
