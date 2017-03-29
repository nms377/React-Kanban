import React, { Component } from 'react';
import Card from './Card.js';

class Queue extends Component {

	render(){
		console.log('Queue: ', this.props)
		return(
			<div id="Queue">
				<h1>Queue</h1>
				{
					this.props.cards.filter(({status}) => status === 'queue').map(cards => {
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

export default Queue;