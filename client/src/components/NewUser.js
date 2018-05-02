import React, { Component } from "react";
import { connect } from "react-redux";

// actions
import { addUser, userErrMsg } from "../redux/actions/userAction";

// misc
import signUpReq from "../lib/userReq";

class NewUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			username: "",
			password: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFirstName = this.handleFirstName.bind(this);
		this.handleLastName = this.handleLastName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
	}

	// XHR Request to connect to server
	addUser(user) {
		signUpReq(user).then(user => {
			this.props.onAddUser(user);
			this.props.history.push("/login");
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		let first_name = document.getElementById("first_name");
		let last_name = document.getElementById("last_name");
		let email = document.getElementById("email");
		let username = document.getElementById("username");
		let password = document.getElementById("password");

		// validate all input fields are not empty strings
		if (
			first_name.value === "" ||
			last_name.value === "" ||
			email.value === "" ||
			username.value === "" ||
			password.value === ""
		) {
			return this.props.onUserErrMsg("All fields are requried");
		}

		// password validation
		if (!password.value.match(/^(?=.{8,16})/)) {
			return this.props.onUserErrMsg(
				"Password must be at least 8 characters but no more than 16 characters"
			);
		}

		this.addUser({
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			username: this.state.username,
			password: this.state.password
		});

		// clears form after submit
		this.setState({
			first_name: "",
			last_name: "",
			email: "",
			username: "",
			password: ""
		});
	}

	handleFirstName(event) {
		this.setState({
			first_name: event.target.value
		});
	}

	handleLastName(event) {
		this.setState({
			last_name: event.target.value
		});
	}

	handleEmail(event) {
		this.setState({
			email: event.target.value
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
			<div className="userForm">
				<p>{this.props.userErrMsg}</p>
				<form className="userInfo" onSubmit={this.handleSubmit} ref="reset">
					<label htmlFor="firstname" className="input_base">
						<span className="input_label">First Name</span>
						<input
							type="text"
							name="firstname"
							className="question"
							id="firstname"
							value={this.state.first_name}
							onChange={this.handleFirstName}
							required
						/>
					</label>
					<label htmlFor="lastname" className="input_base">
						<span className="input_label">Last Name</span>
						<input
							type="text"
							name="lastname"
							className="question"
							id="lastname"
							value={this.state.last_name}
							onChange={this.handleLastName}
							required
						/>
					</label>
					<label htmlFor="email" className="input_base">
						<span className="input_label">Email</span>
						<input
							type="email"
							name="email"
							className="question"						
							id="email"
							value={this.state.email}
							onChange={this.handleEmail}
							required
						/>
					</label>
					<label htmlFor="username" className="input_base">
						<span className="input_label">Username</span>
						<input
							type="text"
							name="username"
							className="question"
							id="username"
							value={this.state.username}
							onChange={this.handleUsername}
							required
						/>
					</label>
					<label htmlFor="password" className="input_base">
						<span className="input_label">Password</span>
						<input
							type="password"
							name="password"
							className="question"
							id="password"
							value={this.state.password}
							onChange={this.handlePassword}
							required
						/>
					</label>
					<input className="userBtn" type="submit" value="Sign Up" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.users
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAddUser: user => {
			dispatch(addUser(user));
		},
		onUserErrMsg: userErrMsg => {
			dispatch(userErrMsg(userErrMsg));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
