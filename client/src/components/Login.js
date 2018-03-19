import React, { Component } from 'react';
import { connect } from 'react-redux';

//  actions
import { addUserToState, userErrMsg } from '../redux/actions/userAction';

class Login extends Component {
	constructor(props){
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		let username = document.getElementById('username').value;
		let password = document.getElementById('password').value;

		if (username === '' || password === '') {
			return this.props.onUserErrMsg('Please enter your email and password');
		}

		this.userIsLoggedIn({
			username: this.state.username,
			password: this.state.password
		})
		.then((data) => {
			if(data) {
				this.props.onSignIn(data.id, data.username);
				this.props.history.push('/profile');
			}
		})
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

	userIsLoggedIn(user) {
		return new Promise(function(res,rej) {
			function reqListener(userData) {
				let results = JSON.parse(this.responseText);
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

  render() {
    return (
			<div>
			<p>{this.props.userErrMsg}</p>
			<form className="UserInfo" onSubmit={this.handleSubmit}>
				<label>
					Username:
						<input id="username" type="text" value={this.state.username} onChange={this.handleUsername} />
				</label>
				<br/>
				<label>
					Password:
						<input id="password" type="password" value={this.state.password} onChange={this.handlePassword} />
				</label>
				<br/>
				<input type="submit" value="Log In"/>
			</form>
			</div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		users: state.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSignIn: (id, username, loggedIn) => {
			dispatch(addUserToState(id, username, loggedIn))
		},
		onUserErrMsg: (userErrMsg) => {
			dispatch(userErrMsg(userErrMsg))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)