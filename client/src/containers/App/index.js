import React, { Component } from 'react';
import MainBoard from '../../components/MainBoard.js';
import NewCard from '../../components/NewCard.js';
import InProgress from '../../components/InProgress.js';
import Queue from '../../components/Queue.js';
import Done from '../../components/Done.js';
import './styles.css';

class App extends Component {
  constructor(){
    super();
    this.title ='React Kanban'
    this.state = {
      cards: [],
      inProgress: 'true'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(event) {
    this.setState({cards: event.target.cards});
  }

  handleSubmit(event) {
    alert('A card was added: ' + this.state.cards);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="Main-header">
         <MainBoard
           mainTitle={this.title}
         />
        </div>

        <NewCard/>

        <div className="InProgress-header">
          <h1>In Progress</h1>
          { 
            this.state.cards.filter(({status}) => status === 'in progress').map( ( { title, priority, status, createdBy, assignedTo }) =>
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

        <div className="Queue-header">
          <h1>Queue</h1>
          {
            this.state.cards.filter(({status}) => status === 'queue').map( ( {title, priority, status, createdBy, assignedTo}) => 
              <Queue
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

        <div className="Done-header">
          <h1>Done</h1>
          {
            this.state.cards.filter(({status}) => status === 'done').map(({title, priority, status, createdBy, assignedTo}) =>
                <Done
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
