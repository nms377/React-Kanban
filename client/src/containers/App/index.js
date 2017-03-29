import React, { Component } from 'react';
import { connect } from 'react-redux';

//  components
// import Card from '../../components/Card.js';
import MainBoard from '../../components/MainBoard.js';
import NewCard from '../NewCard/NewCard.js';
import InProgress from '../../components/InProgress.js';
import Queue from '../../components/Queue.js';
import Done from '../../components/Done.js';

//  misc
import './styles.css';
import request from '../../lib';
// import updateCardReq from '../../lib/updateTask.js';

//  actions
import { addTask } from '../../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.title ='React Kanban'

  }

  componentWillMount() {

    this.getCardsReq();
    // this.updateCardReq();

  }

  getCardsReq(){
    request('GET', 'api/board')
      .then( data => {
        console.log('data: ', data)
        data.forEach(cards => {
          console.log('cards', cards)
          this.props.onAddTask(cards.id, cards.title, cards.priority, cards.status, cards.assignedTo);
        });
      })
  }



  // updateCardReq(url){
  //   request('PUT', url)
  //   .then(data => {
  //     console.log('Data updated: ', data)
  //     data.forEach(cards => {
  //     console.log('cards updated: ', cards)
  //     this.props.onUpdateTask(cards.id, cards.status)          
  //     });
  //   })
  // }


  render() {
    console.log('props', this.props.cards)
    return (
      <div className="App">
        <div className="Main-header">
         <MainBoard
           mainTitle={this.title}
         />
        </div>

        <NewCard />

        <Queue cards={this.props.cards}/>

        <InProgress cards={this.props.cards}/>

        <Done cards={this.props.cards}/>

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
    onAddTask: (id, title, priority, status, createdBy, assignedTo) => {
      dispatch(addTask(id, title, priority, status, createdBy, assignedTo));
    }
    // onUpdateTask: (id, status) => {
    //   dispatch(updateTask(id, status));
    // }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
