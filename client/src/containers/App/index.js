import React, { Component } from 'react';
import MainBoard from '../../components/MainBoard.js';
import InProgress from '../../components/InProgress.js';
import './styles.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      mainTitle: 'React Kanban',
        cards: []
    }
  }

  componentDidMount() {

    var that = this;

    function reqListener(){
      console.log('what is this? ', this.responseText)
      var data = JSON.parse(this.responseText);
      that.setState({
        cards: data
      })
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/api/board");
    oReq.send();
  }

  render() {
    return (
      <div className="App">
        <div className="Main-header">
         <MainBoard
          mainTitle={this.state.mainTitle}
         />
        { 
          this.state.cards.map( ( { title, priority, status, createdBy, assignedTo }) =>
            <InProgress
              key={title}
              title={title}
              priority={priority}
              status={status}
              createdBy={createdBy}
              assignedTo={assignedTo}
            />
          )
        }  
        </div>
      </div>
    );
  }
}

export default App;
