import React, { Component } from 'react';
import Card from './Card.js';

class InProgress extends Component {

	// constructor(props) {
	// 	super(props);
		
		// this.state = {
		// 	status: 'in progress'
		// }

		// this.handleSubmit = this.handleSubmit.bind(this);
		// this.updateStatus = this.updateStatus.bind(this);
	// }

	// handleSubmit(event){
	// 	event.preventDefault();
	// 	this.updateTask({
	// 		id: this.state.id,
	// 		status: this.state.status
	// 	})
	// }

	// updateStatus(event){
	// 	this.setState({
	// 		status: event.target.value
	// 	})
	// }

render(){
		console.log('In Progress: ', this.props)
		return(
			<div id="InProgress">
				<h1>In Progress</h1>
				{
					this.props.cards.filter(({status}) => status === 'in progress').map(cards => {
						return <Card 
							key={cards.title}
							title={cards.title}
							priority={cards.priority}
							status={cards.status}
							createdBy={cards.createdBy}
							assignedTo={cards.assignedTo}
						/>
					})
				}
			</div>
		)
	}
}

export default InProgress;