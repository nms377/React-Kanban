import React, { Component } from 'react';
// import { connect } from 'react-redux';

//  misc
// import getCardsReq from '../lib';

//  actions
// import { addTask, updateTask, deleteTask } from '../actions';

class Login extends Component {

  render() {
    return (
			
			<form className="UserInfo" onSubmit={this.handleSubmit}>
				<label>
					Username:
						<input type="text" />
				</label>
				<br/>
				<label>
					Password:
						<input type="password" />
				</label>
				<br/>
				<input type="submit" value="Log In"/>
			</form>

    );
  }
}

export default Login;