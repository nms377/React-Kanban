import React, { Component } from "react";
import { connect } from "react-redux";

//  components
import InProgress from "../../components/InProgress.js";
import Queue from "../../components/Queue.js";
import Done from "../../components/Done.js";
// import NewCard from '../NewCard/NewCard.js';

//  misc
import getCardsReq from "../../lib";

//  actions
import {
  addTask,
  updateTask,
  deleteTask
} from "../../redux/actions/cardAction.js";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

class MainBoard extends Component {
  xhrLoginCheck() {
    return new Promise(function(res, rej) {
      function reqListener() {
        res(this.responseText);
      }
      let oReq = new XMLHttpRequest();
      oReq.open("GET", "/api/user/checkLogin");
      oReq.addEventListener("load", reqListener);
      oReq.send();
    });
  }

  componentWillMount() {
    this.xhrLoginCheck().then(userData => {
      let user = userData;
      this.props.onAddUser(user.id, user.username);
    });

    getCardsReq().then(data => {
      console.log("data: ", data);
      data.forEach(cards => {
        console.log("queue cards", cards);
        this.props.onAddTask(
          cards.id,
          cards.title,
          cards.priority,
          cards.status,
          cards.createdBy,
          cards.assignedTo
        );
      });
    });
  }

  render() {
    if (this.props.users.loggedInUser) {
      return (
        <div className="MainBoard">
          <Queue
            cards={this.props.cards}
            updateTask={this.updateTask}
            deleteTask={this.deleteTask}
          />

          <InProgress
            cards={this.props.cards}
            updateTask={this.updateTask}
            deleteTask={this.deleteTask}
          />

          <Done
            cards={this.props.cards}
            updateTask={this.updateTask}
            deleteTask={this.deleteTask}
          />
        </div>
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: (id, title, priority, status, createdBy, assignedTo) => {
      dispatch(addTask(id, title, priority, status, createdBy, assignedTo));
    },
    onUpdateTask: (title, status) => {
      dispatch(updateTask(title, status));
    },
    onDeleteTask: title => {
      dispatch(deleteTask(title));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBoard);
