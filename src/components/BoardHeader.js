import React from 'react';
import '../styles/boardHeader.css';

const BoardHeader = ({showBombs, startNewGame, handleSetBombs}) => {
  return (
    <div className="BoardHeader">
      <div
        className="StartNewGameButton"
        onClick={showBombs ? () => startNewGame() : () => handleSetBombs()}
      >
        {showBombs ? '😵' : '😊'}
      </div>
    </div>
  )
}
export default BoardHeader;
