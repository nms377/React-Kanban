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
import getCardsReq from '../../lib';

//  actions
import { addTask, updateTask, deleteTask } from '../../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.title ='React Kanban'
  }

  componentWillMount() {
    getCardsReq()
      .then( data => {
        console.log('data: ', data)
        data.forEach(cards => {
          console.log('cards', cards)
          this.props.onAddTask(cards.id, cards.title, cards.priority, cards.status, cards.assignedTo);
        });
      })
  }

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

        <Queue cards={this.props.cards} updateTask={this.updateTask}/>

        <InProgress cards={this.props.cards} updateTask={this.updateTask}/>

        <Done cards={this.props.cards} updateTask={this.updateTask}/>

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
    },
    onUpdateTask: (id, status) => {
      dispatch(updateTask(id, status));
    },
    onDeleteTask: (id) => {
      dispatch(deleteTask(id));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
