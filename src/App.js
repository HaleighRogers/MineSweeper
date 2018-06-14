import React, { Component } from 'react';
import './App.css';
import jsonSquares from './json/squares.json';
import Header from './components/Header';
import Board from './components/Board';
import Settings from './components/Settings';

class App extends Component {
  constructor(){
    super()
    this.state={
      scores: [{name: 'Haleigh', time: '0:50'}],
      squares: jsonSquares,
      columnCount: 10,
      rowCount: 10
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Settings scores={this.state.scores}/>
        <Board squares={this.state.squares}
              columnCount={this.state.columnCount}
              rowCount={this.state.rowCount}/>
      </div>
    );
  }
}

export default App;
