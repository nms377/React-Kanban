import React, { Component } from 'react';
import MainBoard from '../../components/MainBoard.js';
import './styles.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      mainTitle: 'React Kanban'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Main-header">
         <MainBoard title={this.state.mainTitle}/>
        </div>
      </div>
    );
  }
}

export default App;
