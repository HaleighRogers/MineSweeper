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
    let index = 0
    let square = squares[index]

    while(index < squares.length - 1) {
      if(square.isBomb = false) {
        this.surroundingSquareHelper(square.id)
      }
      index++
    }
  }

  surroundingSquareHelper = (squareId) => {
    let bombTouchCount = 0
    //look at the surrounding squares
    //if a surrounding square is a bomb increase
    //the bombTouchCount
    return bombTouchCount
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
