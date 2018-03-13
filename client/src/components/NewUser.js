import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { addUser, userErrMsg } from '../actions/userAction';

// misc
import signUpReq from '../lib/userReq';


class NewUser extends Component {
	constructor(props){
		super(props);

			this.state = {
				name: '',
				username: '',
				password: ''
			};
	
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);

	}

	// XHR Request
	addUser(user){
		signUpReq(user)
		.then(user => {
			this.props.onAddUser(user);
			this.props.history.push('/login');
		});
	}

	handleSubmit(event){
		event.preventDefault();

		let name = document.getElementById("name");
		let username = document.getElementById("username");
		let password = document.getElementById("password");

		// validate all input fields are not empty strings
		if (name.value === '' || username === '' || password === '') {
			return this.props.onUserErrMsg('All fields are requried');
		}

		// password validation
		if (!password.value.match(/^(?=.{8,16})/)) {
			return this.props.onUserErrMsg('Password must be at least 8 characters but no more than 16 characters');
		}

		this.addUser({
			name: this.state.first_name,
			username: this.state.username,
			password: this.state.password
		});

		// clears form after submit
		this.setState({
			name: '',
			username: '',
			password: ''
		});
	}

	handleName(event){
		this.setState({
			name: event.target.value
		});
	}

	handleUsername(event){
		this.setState({
			username: event.target.value
		});
	}

	handlePassword(event){
		this.setState({
			password: event.target.value
		});
	}

  render() {
    return (
			
			<form className="UserInfo" onSubmit={this.handleSubmit} ref="reset">
				<label htmlFor="name">
					Name: 
						<input id="name" type="text" value={this.state.name} onChange={this.handleName}/>
				</label>
				<br/>
				<label htmlFor="username">
					Username:
						<input id="username" type="text" value={this.state.username} onChange={this.handleUsername}/>
				</label>
				<br/>
				<label htmlFor="password">
					Password:
						<input id="password" type="password" value={this.state.password} onChange={this.handlePassword}/>
				</label>
				<br/>
				<input type="submit" value="Sign Up"/>
			</form>

    );
  }
}

const mapStateToProps = (state) => {
	return {
		users: state.users
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddUser: (user) => {
			dispatch(addUser(user));
		},
		onUserErrMsg: (userErrMsg) => {
			dispatch(userErrMsg(userErrMsg))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewUser);
