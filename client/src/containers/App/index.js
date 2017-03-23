import React, { Component } from 'react';
import MainBoard from '../../components/MainBoard.js';
import InProgress from '../../components/InProgress.js';
import './styles.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mainTitle: 'React Kanban',
      list:
        {
          title: 'sanity',
          priority: 'high',
          status: 'queue'
        }
    }
  }

 componentWillMount() {

    function reqListener(){
      console.log('what is this? ', this.responseText)
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
         <InProgress
           title={this.state.list.title}
           priority={this.state.list.priority}
           status={this.state.list.status}         
         />
        </div>
      </div>
    );
  }
}

export default App;
