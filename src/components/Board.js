import React from 'react';
import '../styles/board.css';
import Square from './Square';
import BoardHeader from './BoardHeader';

const Board = ({squares, handleSetBombs, handleShowBombs, showBombs, startNewGame}) => {

  return (
    <div className="Board">
      <div className='row-container'>
      <BoardHeader handleSetBombs={handleSetBombs} showBombs={showBombs} startNewGame={startNewGame}/>
        {squares.map(square => {
          return (
            <Square
              key={square.id}
              id={square.id}
              clicked={square.clicked}
              isBomb={square.isBomb}
              showBombs={showBombs}
              handleShowBombs={handleShowBombs}
              surroundingBombs={square.surroundingBombs}
            />
          )
          })
        }
      </div>
    </div>
  )
}

export default Board;
