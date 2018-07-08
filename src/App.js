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
      columnCount: 10,
      rowCount: 10,
      bombCount: 10
    }
  }

  handleSetBombs = () => {
    let squares = [...this.state.squares]
    squares.forEach((square) => square.isBomb = false)
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
  }

  handleNumberOfBombsASqaureTouches = () => {
    let squares = [...this.state.squares]

    squares.forEach((square) => {
      if(square.isBomb === false) {
        square.surroundingBombs = this.surroundingSquareHelper(square.id)
      }
    })
    this.setState({squares: squares})
  }

  surroundingSquareHelper = (squareId) => {
    let squares = [...this.state.squares]
    let bombTouchCount = 0
    //let squareKeyArr = squareId.split(separator)
    let surroundingSquares = squares.filter((square) => {
      this.oneLeft(squareId) === square.id ||
      this.oneRight(squareId) === square.id ||
      this.oneTopLeft(squareId) === square.id ||
      this.oneTopMiddle(squareId) === square.id ||
      this.oneTopRight(squareId) === square.id ||
      this.oneBottomLeft(squareId) === square.id ||
      this.oneBottomMiddle(squareId) === square.id ||
      this.oneBottomRight(squareId) === square.id
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

  render() {
    return (
      <div className="App">
        <Header/>
        <Settings scores={this.state.scores}/>
        <BoardHeader handleSetBombs={this.handleSetBombs}
        handleNumberOfBombsASqaureTouches={this.handleNumberOfBombsASqaureTouches}/>
        <Board squares={this.state.squares}
              columnCount={this.state.columnCount}
              rowCount={this.state.rowCount}/>
      </div>
    );
  }
}

export default App;
