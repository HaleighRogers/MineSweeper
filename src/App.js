import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {createSpaceModalActive: false, spaces: []}

  }

  componentWillMount(){
    fetch("http://localhost:8080/api/v1/spaces")
      .then((response)=>response.json())
      .then((responseJson)=>{
        this.setState({spaces: responseJson})
      })
  }

  handleCreateSpace = () => {
    this.setState({createSpaceModalActive: true})
  }

  showCreateSpaceButton (){
    if(this.state.createSpaceModalActive){
      return " "
    } else {
      return <button onClick={this.handleCreateSpace}>Create space</button>
    }
  }

  handleSubmitSpaceForm(e) {
    let body = JSON.stringify({name: e.target.name.value, diskQuota: e.target.diskQuota.value, memoryQuota: e.target.memoryQuota.value})

    debugger

    fetch("http://localhost:8080/api/v1/spaces", {
      body: body,
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((response)=>{
        debugger
        response.json()
      })
      .then((responseJson)=>{
        console.log("Hello, world!")
      }).catch((error)=>{
        debugger
        console.error(error)
      })
  }

  renderModal() {
    if(this.state.createSpaceModalActive){
      return (
        <form onSubmit={this.handleSubmitSpaceForm}>
          <label> Name </label> <input id="name"/>
          <label> Disk quota </label> <input id="diskQuota"/>
          <label> Memory quota </label> <input id="memoryQuota"/> <br/>
          <input type="submit"/>
        </form>
      )
    } else {
      return " "
    }
  }

  renderSpaces() {
    return this.state.spaces.map((space, index)=><div className="space"
      key={index}>{space.name}</div>)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Three_Stars_and_Sun_%28Azkals%29.svg/92px-Three_Stars_and_Sun_%28Azkals%29.svg.png" alt="logo" />
          <h2>Welcome to Sunshine Forge</h2>
        </div>
        <p className="App-intro">
          To get started click the button to create your own space!
        </p>
        {this.renderModal()}
        {this.showCreateSpaceButton()}
        <h3 className = "existingSpaceHeader"> Existing Spaces</h3>
        {this.renderSpaces()}
      </div>
    );
  }
}

export default App;
