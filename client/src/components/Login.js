import React, { Component } from 'react';
import { connect } from 'react-redux';

//  actions
import { addUserToState, userErrorMsg } from '../redux/actions/userAction';

class Login extends Component {
	constructor(props){
		super(props);

		this.state = {
			username: '',
			password: '',
			userErrorMsg: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
	}

	userIsLoggedIn(user) {
		return new Promise(function(res,rej) {
			function reqListener(userData) {
				let results = this.responseText;
				if (results === null) {
					rej(results);
				} else {
					res(results);
				}
			}

			var oReq = new XMLHttpRequest();
			oReq.addEventListener("load", reqListener);
			oReq.open('POST', 'api/user/login');
			oReq.setRequestHeader('Content-type', 'application/json');
			oReq.send(JSON.stringify(user));
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		let username = document.getElementById('username').value;
		let password = document.getElementById('password').value;

		if (username === '' || password === '') {
			return this.props.onUserErrorMsg('Please enter your email and password');
		}

		this.userIsLoggedIn({
			username: this.state.username,
			password: this.state.password
		})
		.then((data) => {
			if(data) {
				let userInfo = JSON.parse(data);
				this.props.onSignIn(userInfo.id, userInfo.username);
				this.props.history.push('/board');
			}
		})
		.catch(err => {
			return this.props.onUserErrorMsg('Username or Password is invalid. Please try again.');
		});
	}

	handleUsername(event) {
		this.setState({
			username: event.target.value
		});
	}

	handlePassword(event) {
		this.setState({
			password: event.target.value
		});
	}

  render() {
    return (
			<div>
			<p>{ this.props.users.userErrorMsg }</p>
			<form className="UserInfo" onSubmit={this.handleSubmit}>
				<input id="username" placeholder="Username" type="text" value={this.state.username} onChange={this.handleUsername} />
				<br/>
				<input id="password" placeholder="Password" type="password" value={this.state.password} onChange={this.handlePassword} />
				<br/>
				<input type="submit" value="Log In"/>
			</form>
			</div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		loggedInUser: state.loggedInUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSignIn: (id, username, loggedIn) => {
			dispatch(addUserToState(id, username, loggedIn))
		},
		onUserErrorMsg: (userErrorMessage) => {
			dispatch(userErrorMsg(userErrorMessage))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)