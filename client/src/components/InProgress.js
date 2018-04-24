import React, { Component } from "react";
import Card from "./Card.js";

class InProgress extends Component {
	render() {
		// console.log('In Progress: ', this.props)
		return (
			<div id="InProgress">
				<h2>In Progress</h2>
				{this.props.cards.cards
					.filter(({ status }) => status === "in progress")
					.map(cards => {
						return (
							<Card
								key={cards.id}
								title={cards.title}
								priority={cards.priority}
								status={cards.status}
								createdBy={cards.createdBy}
								assignedTo={cards.assignedTo}
								updateTask={this.props.udpateTask}
								deleteTask={this.props.deleteTask}
							/>
						);
					})}
			</div>
		);
	}
}

export default InProgress;
