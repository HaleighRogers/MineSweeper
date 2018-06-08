import React, { Component } from 'react';
import '../styles/header.css';

export default class Header extends Component {
  render() {
    return(
      <div className="App-header">
        <h2 className="Header-name">{"Haleigh's"}</h2>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/db4c5b58268415.59f628033bd08.png" alt="logo" />
      </div>
    )
  }
}
