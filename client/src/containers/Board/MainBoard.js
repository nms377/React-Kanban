import React, { Component } from 'react';
import { connect } from 'react-redux';

//  components
import InProgress from '../../components/InProgress.js';
import Queue from '../../components/Queue.js';
import Done from '../../components/Done.js';
import NewCard from '../NewCard/NewCard.js';

//  misc
import getCardsReq from '../../lib';

//  actions
import { addTask, updateTask, deleteTask } from '../../redux/actions/cardAction';

class MainBoard extends Component {

  componentWillMount() {
    getCardsReq()
      .then( data => {
        console.log('data: ', data);
        data.forEach(cards => {
          console.log('cards', cards);
          this.props.onAddTask(cards.id, cards.title, cards.priority, cards.status, cards.createdBy, cards.assignedTo, cards.user);
        });
      });
  }

  render() {
    console.log('props', this.props);
    return (
      <div className="MainBoard">
        <Queue cards={this.props.cards} updateTask={this.updateTask} deleteTask={this.deleteTask}/>

        <InProgress cards={this.props.cards} updateTask={this.updateTask} deleteTask={this.deleteTask}/>

        <Done cards={this.props.cards} updateTask={this.updateTask} deleteTask={this.deleteTask}/>
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
    onAddTask: (id, title, priority, status, createdBy, assignedTo, user) => {
      dispatch(addTask(id, title, priority, status, createdBy, assignedTo, user));
    },
    onUpdateTask: (title, status) => {
      dispatch(updateTask(title, status));
    },
    onDeleteTask: (title) => {
      dispatch(deleteTask(title));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBoard);