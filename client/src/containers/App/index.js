import React, { Component } from 'react';

//  components
// import Card from '../../components/Card.js';
import MainBoard from '../../components/MainBoard.js';
import NewCard from '../NewCard/NewCard.js';

//  misc
import './styles.css';

class App extends Component {
  constructor(props){
    super(props);
    this.title ='React Kanban'
  }

  render() {
    return (
      <div className="App">
        <div className="Main-header">
         <h1>{this.title}</h1>
        </div>

        <NewCard />

        <MainBoard />
      </div>
    );
  }
}

export default App;