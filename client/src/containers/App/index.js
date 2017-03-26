import React, { Component } from 'react';
import { connect } from 'react-redux';

//  components
import MainBoard from '../../components/MainBoard.js';
import NewCard from '../../components/NewCard.js';
import InProgress from '../../components/InProgress.js';
import Queue from '../../components/Queue.js';
import Done from '../../components/Done.js';

//  misc
import './styles.css';
import getCardsReq from '../../lib';

//  actions
import { showTasks } from '../../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.title ='React Kanban'
  }


  componentDidMount() {
   getCardsReq()
      .then( data => {
        console.log('data: ', data)
        data.forEach(cards => {
          console.log('cards', cards)
          this.props.onShowTasks(cards.title, cards.priority, cards.status);
        });
      })
  }

    // addNewCard(){
    //   let newReq = new XMLHttpRequest();
    //   newReq.open("POST", "/api/board")
    //   newReq.setRequestHeader("Content-Type", "application/json");
    //   newReq.send(JSON.stringify(this.responseText))
    // }

    // handleSubmit(event){
    //   event.preventDefault();
  
    //   this.addNewCard({
    //     title: this.state.title,
    //     priority: this.state.priority,
    //     status: this.state.status
    //   })

    // }

  render() {
    console.log('props', this.props)
    return (
      <div className="App">
        <div className="Main-header">
         <MainBoard
           mainTitle={this.title}
         />
        </div>

        <NewCard />

        <div className="InProgress-header">
          <h1>In Progress</h1>
          { 
            this.props.cards.filter(({status}) => status === 'in progress').map( ( { title, priority, status, createdBy, assignedTo }) =>
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
            this.props.cards.filter(({status}) => status === 'queue').map( ( {title, priority, status, createdBy, assignedTo}) => 
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
            this.props.cards.filter(({status}) => status === 'done').map(({title, priority, status, createdBy, assignedTo}) =>
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

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowTasks: (title, priority, status, createdBy, assignedTo) => {
      dispatch(showTasks(title, priority, status, createdBy, assignedTo));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
