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

      //(square.id[0] === squareId[0] && (parseInt(square.id[1], 10)
      //=== parseInt(squareId[1], 10) + 1)) || (parseInt(squareId[1], 10) - 1)
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

  render() {
    return (
      <div className="App">
        <Header/>
        <Settings scores={this.state.scores}/>
        <BoardHeader handleSetBombs={this.handleSetBombs}/>
        <Board squares={this.state.squares}
              columnCount={this.state.columnCount}
              rowCount={this.state.rowCount}/>
      </div>
    );
  }
}

export default App;
