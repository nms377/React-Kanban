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
    this.state = {
      showForm: true
    }
    this.title ='React Kanban'
  }

  // Toggle to Hide and Show Task Form
  operation(){
    this.setState({
      showForm:!this.state.showForm
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Main-header">
          <h1>{this.title}</h1>

          <div id="addCard" onClick={()=>this.operation()}>
            +
          </div>

        </div>

      {
        this.state.showForm?
          <NewCard />
        :null
      }

        <MainBoard />
      </div>
    );
  }
}

export default App;