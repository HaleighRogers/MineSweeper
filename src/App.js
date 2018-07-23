import React, { Component } from 'react';
import './App.css';
import jsonSquares from './json/squares.json';
import Header from './components/Header';
import Board from './components/Board';
import Settings from './components/Settings';
import BoardHeader from './components/BoardHeader';

class App extends Component {
  constructor(){
    super()
    this.state = {
      scores: [{name: 'Haleigh', time: '0:50'}],
      squares: jsonSquares,
      columnCount: 30,
      rowCount: 20,
      bombCount: 10,
      showBombs: false,
    }
  }

  handleSetBombs = () => {
    let squares = [...this.state.squares]
    squares.forEach((square) => {
      square.isBomb = false
      square.surroundingBombs = 0
    })
    let bombSquares = 0

    while(bombSquares < this.state.bombCount){
      let index = Math.floor((Math.random() * squares.length - 1) + 1)
      let square = squares[index]
      if(!square.isBomb) {
        square.isBomb = true
        bombSquares++
      }
    }
    this.setState({squares: squares})
    this.handleNumberOfBombsASqaureTouches()
}

  handleNumberOfBombsASqaureTouches = () => {
    let squares = [...this.state.squares]

    squares.map((square) => {
      if(square.isBomb === false) {
        square.surroundingBombs = this.surroundingSquareHelper(square.id)
      }
    })
    this.setState({squares: squares})
  }

  surroundingSquareHelper = (squareId) => {
    let squares = [...this.state.squares]
    let bombTouchCount = 0
    let surroundingSquares = squares.filter((square) => {
      return (
      this.oneLeft(squareId) === square.id ||
      this.oneRight(squareId) === square.id ||
      this.oneTopLeft(squareId) === square.id ||
      this.oneTopMiddle(squareId) === square.id ||
      this.oneTopRight(squareId) === square.id ||
      this.oneBottomLeft(squareId) === square.id ||
      this.oneBottomMiddle(squareId) === square.id ||
      this.oneBottomRight(squareId) === square.id
      )
    })

    surroundingSquares.forEach((square) => {
      if (square.isBomb) {
        bombTouchCount++
      }
    })
    return bombTouchCount
  }

  oneLeft = (squareId) => {
    return squareId[0] + String.fromCharCode(squareId[1].charCodeAt(0) - 1)
  }

  oneRight = (squareId) => {
    return squareId[0] + String.fromCharCode(squareId[1].charCodeAt(0) + 1)
  }

  oneTopLeft = (squareId) => {
    return (parseInt(squareId[0], 10) - 1) + String.fromCharCode(squareId[1].charCodeAt(0) - 1)
  }

  oneTopMiddle = (squareId) => {
    return (parseInt(squareId[0], 10) - 1) + squareId[1]
  }

  oneTopRight = (squareId) => {
    return (parseInt(squareId[0], 10) - 1) + String.fromCharCode(squareId[1].charCodeAt(0) + 1)
  }

  oneBottomLeft = (squareId) => {
    return (parseInt(squareId[0], 10) + 1) + String.fromCharCode(squareId[1].charCodeAt(0) - 1)
  }

  oneBottomMiddle = (squareId) => {
    return (parseInt(squareId[0], 10) + 1) + squareId[1]
  }

  oneBottomRight = (squareId) => {
    return (parseInt(squareId[0], 10) + 1) + String.fromCharCode(squareId[1].charCodeAt(0) + 1)
  }

  handleShowBombs = () => {
    this.setState({showBombs: true})
  }

  startNewGame = () => {
    this.setState({showBombs: false})
    this.handleSetBombs()
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Settings scores={this.state.scores}/>
        <Board
          handleShowBombs={this.handleShowBombs}
          showBombs={this.state.showBombs}
          squares={this.state.squares}
          columnCount={this.state.columnCount}
          rowCount={this.state.rowCount}
          handleSetBombs={this.handleSetBombs}
          startNewGame={this.startNewGame}
        />
      </div>
    );
  }
}

export default App;