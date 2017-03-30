import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTask, deleteTask } from '../actions';
import updateCardReq from '../lib/updateTask.js';
import deleteCardReq from '../lib/deleteTask.js';


class Card extends Component {

	constructor(props) {
		super(props);

		this.handleStatus = this.handleStatus.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleStatus(event){
		event.preventDefault();
		this.updateTask({
			title: this.props.title,
			status: event.target.value,
			priority: this.props.priority,
			assignedTo: this.props.assignedTo
		})
	}

	handleDelete(event){
		event.preventDefault();
			this.deleteTask({
				title: this.props.title,
				status: this.props.status,
				priority: this.props.priority,
				assignedTo: this.props.assignedTo
			})
	}

  updateTask(card){
    updateCardReq(card)
      .then(card => {
      	console.log('WHAT UPDATED:', card)
        this.props.onUpdateTask(card.id, card.status)          
      })
  }

  deleteTask(card){
  	deleteCardReq(card)
  		.then(card => {
  			console.log('WHAT DELETED: ', card)
  			this.props.onDeleteTask(card.id);
  		})
  }

	render(){
		return(
			<div className="Cards">
				<p>{this.props.title}</p>
				<p>Priority: {this.props.priority}</p>
				<label>
					Status:
					<select defaultValue={this.props.status} onChange={this.handleStatus}>
						<option value="queue">Queue</option>
						<option value="in progress">In Progress</option>
						<option value="done">Done</option>
					</select>
				</label>
				<p>Created By: {this.props.createdBy}</p>
				<p>Assign To: {this.props.assignedTo}</p>
				<input type="submit" value="Delete" onClick={this.handleDelete}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateTask: (id, status) => {
      dispatch(updateTask(id, status));
    },
    onDeleteTask: (id) => {
    	dispatch(deleteTask(id));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);