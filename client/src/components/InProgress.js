import React, { Component } from 'react';
import Card from './Card.js';

class InProgress extends Component {

	

render(){
		console.log('In Progress: ', this.props)
		return(
			<div id="InProgress">
				<h1>In Progress</h1>
				{
					this.props.cards.filter(({status}) => status === 'in progress').map(cards => {
						return <Card 
							key={cards.id}
							title={cards.title}
							priority={cards.priority}
							status={cards.status}
							createdBy={cards.createdBy}
							assignedTo={cards.assignedTo}
							updateTask={this.props.udpateTask}
						/>
					})
				}
			</div>
		)
	}
}

export default InProgress;