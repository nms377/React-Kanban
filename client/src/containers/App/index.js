import React, { Component } from 'react';
import MainBoard from '../../components/MainBoard.js';
import './styles.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Main-header">
         <MainBoard/>
        </div>
      </div>
    );
  }
}

export default App;
