import React, { Component } from 'react';
import addCardReq from '../../lib/addTask.js';
import { connect } from 'react-redux';
import { addTask } from '../../actions';

class NewCard extends Component {

	constructor (props) {
		super(props);
	
		this.state = {
			title: '',
			priority: 'low',
			status: 'in progress',
			assignedTo: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitle = this.handleTitle.bind(this);
		this.handlePriority = this.handlePriority.bind(this);
		this.handleStatus = this.handleStatus.bind(this);
		this.handleAssignedTo = this.handleAssignedTo.bind(this);
	}


	addTask(card){
		addCardReq(card)
			.then(card => {
				console.log('Card added: ', card)
				this.props.onAddTask(card.title, card.status, card.priority, card.assignTo)
			})
	}

	handleSubmit(event){
		event.preventDefault();
		this.addTask({
			title: this.state.title,
			priority: this.state.priority,
			status: this.state.status,
			assignedTo: this.state.assignedTo
		})
	}

	handleTitle(event){
		this.setState({
			title: event.target.value
		})
	}

	handlePriority(event){
		this.setState({
			priority: event.target.value
		})
	}

	handleStatus(event){
		this.setState({
			status: event.target.value
		})
	}

	handleAssignedTo(event){
		this.setState({
			assignedTo: event.target.value
		})
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>

					<label>
						Task:
							<input type="text" value={this.state.title} onChange={this.handleTitle}/>
					</label>
					<label>
						Priority:
							<select value={this.state.priority} onChange={this.handlePriority}>
								<option value="low">Low</option>
								<option value="high">High</option>
							</select>
					</label>
					<label>
						Status:
							<select value={this.state.status} onChange={this.handleStatus}>
								<option value="in progress">In Progress</option>
								<option value="queue">Queue</option>
								<option value="done">Done</option>
							</select>
					</label>
					<label>
						Assigned To:
							<input type="text" value={this.state.assignedTo} onChange={this.handleAssignedTo}/>
					</label>
					<input type="submit" value="Add Task"/>
				</form>
		)
	}
}

const mapStateToProps = (state) => {
	return({
		cards: state.cards
	})
};

const mapDispatchToProps = (dispatch) => {
	return({
		onAddTask: (title, priority, status, assignedTo) => {
			dispatch(addTask(title, priority, status, assignedTo));
		}
	})
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewCard);