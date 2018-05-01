import React, { Component } from "react";
import addCardReq from "../../lib/addTask.js";
import { connect } from "react-redux";
import { addTask } from "../../redux/actions/cardAction";
import "./styles.css";

class NewCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			priority: "low",
			status: "queue",
			assignedTo: "",
			createdBy: "",
			user: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitle = this.handleTitle.bind(this);
		this.handlePriority = this.handlePriority.bind(this);
		this.handleStatus = this.handleStatus.bind(this);
		this.handleAssignedTo = this.handleAssignedTo.bind(this);
	}

	addTask(card) {
		addCardReq(card).then(card => {
			// console.log('Card added: ', card)
			// console.log('this.props', this.props);
			this.props.onAddTask(
				card.id,
				card.title,
				card.priority,
				card.status,
				card.createdBy,
				card.assignedTo,
				card.user
			);
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.addTask({
			title: this.state.title,
			priority: this.state.priority,
			status: this.state.status,
			assignedTo: this.state.assignedTo,
			createdBy: this.props.users.loggedInUser.username,
			user: this.props.users.loggedInUser.id
		});
		this.setState({
			title: "",
			priority: "low",
			status: "queue",
			assignedTo: "",
			createdBy: "",
			user: ""
		});
	}

	handleTitle(event) {
		this.setState({
			title: event.target.value
		});
	}

	handlePriority(event) {
		this.setState({
			priority: event.target.value
		});
	}

	handleStatus(event) {
		this.setState({
			status: event.target.value
		});
	}

	handleAssignedTo(event) {
		this.setState({
			assignedTo: event.target.value
		});
	}

	render() {
		return (
			<form id="newCard" onSubmit={this.handleSubmit}>
				<label htmlFor="task" className="input_card">
					<span className="input_card_label">Task</span>
					<input
						type="text"
						id="task"
						value={this.state.title}
						onChange={this.handleTitle}
					/>
				</label>
				<label htmlFor="priority" className="input_card">
					<span className="input_card_label">Priority</span>
					<select id="priority" value={this.state.priority} onChange={this.handlePriority}>
						<option value="low">Low</option>
						<option value="high">High</option>
					</select>
				</label>
				<label htmlFor="status" className="input_card">
					<span className="input_card_label">Status</span>
					<select id="status" value={this.state.status} onChange={this.handleStatus}>
						<option value="queue">Queue</option>
						<option value="in progress">In Progress</option>
						<option value="done">Done</option>
					</select>
				</label>
				<label htmlFor="assigned" className="input_card">
					<span className="input_card_label">Assigned To</span>
					<input
						type="text"
						id="assigned"
						value={this.state.assignedTo}
						onChange={this.handleAssignedTo}
					/>
				</label>
				<input type="submit" className="newCardBtn" value="Add Task" />
			</form>
		);
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
		onAddTask: (id, title, priority, status, createdBy, assignedTo, user) => {
			dispatch(
				addTask(id, title, priority, status, createdBy, assignedTo, user)
			);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);
