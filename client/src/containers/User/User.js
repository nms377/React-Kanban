import React, { Component } from 'react';
// import { connect } from 'react-redux';

//  components
import NewUser from '../../components/NewUser.js';
import Login from '../../components/Login.js';

//  misc
// import getCardsReq from '../lib';

//  actions
// import { addTask, updateTask, deleteTask } from '../actions';

class User extends Component {

  render() {
    return (

      <div id="User">
        <Login />
        <NewUser />
      </div>

    );
  }
}

export default User;