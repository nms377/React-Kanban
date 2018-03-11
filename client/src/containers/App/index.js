import React, { Component } from 'react';

//  components
import User from '../User/User.js';
import MainBoard from '../Board/MainBoard.js';
import NewCard from '../NewCard/NewCard.js';

//  misc
import './styles.css';

class App extends Component {
	constructor(props){
      super(props);
      this.state = {
       showForm: false
      };
  }

  // Toggle to Hide and Show Task Form
  operation(){
    this.setState({
      showForm:!this.state.showForm
    });
  }

  render() {
    return (
      <div className="App">
        <div className="MainHeader">
          <h1>React Kanban</h1>

          <div id="addCard" onClick={()=>this.operation()}>
            +
          </div>
        </div>

      {
        this.state.showForm?
          <NewCard />
        :null
      }
        <User />
      </div>
    );
  }
}

export default App;