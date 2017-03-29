import React, { Component } from 'react';
import Card from './Card.js';

class Done extends Component {

	render(){
		console.log('Done: ', this.props)
		return(
			<div id="Done">
				<h1>Done</h1>
				{
					this.props.cards.filter(({status}) => status === 'done').map(cards => {
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

export default Done;