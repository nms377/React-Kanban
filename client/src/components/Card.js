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
			status: event.target.value
		})
	}

	handleDelete(event){
		event.preventDefault();
			this.deleteTask({
				title: this.props.title
			})
	}

  updateTask(card){
    updateCardReq(card)
      .then(card => {
      	console.log('WHAT UPDATED:', card)
        this.props.onUpdateTask(card.title, card.status)          
      })
  }

  deleteTask(card){
  	deleteCardReq(card)
  		.then(card => {
  			console.log('WHAT DELETED: ', card)
  			this.props.onDeleteTask(card.title);
  		})
  }

	render(){
		return(
			<div className="Cards">
				<p className="Title">{this.props.title}</p>
				<p className="Priority">Priority: {this.props.priority}</p>
				<label className="Status">
					Status:
					<select defaultValue={this.props.status} onChange={this.handleStatus}>
						<option value="queue">Queue</option>
						<option value="in progress">In Progress</option>
						<option value="done">Done</option>
					</select>
				</label>
				<p className="CreatedBy">Created By: {this.props.createdBy}</p>
				<p className="AssignTo">Assign To: {this.props.assignedTo}</p>
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
    onUpdateTask: (title, status) => {
      dispatch(updateTask(title, status));
    },
    onDeleteTask: (title) => {
    	dispatch(deleteTask(title));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);