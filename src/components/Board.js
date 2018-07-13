import React, { Component } from 'react';
import '../styles/board.css';
import Square from './Square';
import BoardHeader from './BoardHeader';

export default class Board extends Component {
  
  render() {
    return(
      <div className="Board">
        <div className='row-container'>
        <BoardHeader handleSetBombs={this.props.handleSetBombs}/>
        {this.props.squares.map(square => {
          return (
            <Square 
              key={square.id} 
              id={square.id}
              clicked={square.clicked}
              isBomb={square.isBomb}
              surroundingBombs={square.surroundingBombs}
            />
          )
        })}
        </div>
      </div>
    )
  }
}
