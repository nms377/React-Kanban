import React, { Component } from 'react';
// import { connect } from 'react-redux';

//  misc
// import getCardsReq from '../lib';

//  actions
// import { addTask, updateTask, deleteTask } from '../actions';

class NewUser extends Component {

  render() {
    return (
			
			<form onSubmit={this.handleSubmit}>
				<label>
					First Name: 
						<input type="text" onChange={this.handleFirstName}/>
				</label>
				<br/>
				<label>
					Last Name: 
						<input type="text" onChange={this.handleLastName}/>
				</label>
				<br/>
				<label>
					Email: 
						<input type="email" onChange={this.handleEmail}/>
				</label>
				<br/>
				<label>
					Username:
						<input type="text" onChange={this.handleUsername}/>
				</label>
				<br/>
				<label>
					Password:
						<input type="password" onChange={this.handlePassword}/>
				</label>
				<br/>
				<input type="submit" value="Sign Up"/>
			</form>

    );
  }
}

export default NewUser;