import React, { Component } from 'react';
import Card from './Card.js';

class Queue extends Component {

	render(){
		// console.log('Queue: ', this.props)
		return(
			<div id="Queue">
				<h1>Queue</h1>
				{
					this.props.cards.filter(({status}) => status === 'queue').map(cards => {
						return <Card 
							key={cards.id}
							title={cards.title}
							priority={cards.priority}
							status={cards.status}
							createdBy={cards.createdBy}
							assignedTo={cards.assignedTo}
							updateTask={this.props.updateTask}
							deleteTask={this.props.deleteTask}
						/>
					})
				}
			</div>
		)
	}
}

export default Queue;