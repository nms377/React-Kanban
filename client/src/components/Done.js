import React, { Component } from "react";
import Card from "./Card.js";

class Done extends Component {
	render() {
		// console.log('Done: ', this.props)
		return (
			<div id="Done">
				<h2>Done</h2>
				{this.props.cards.cards
					.filter(({ status }) => status === "done")
					.map(cards => {
						return (
							<Card
								key={cards.id}
								title={cards.title}
								priority={cards.priority}
								status={cards.status}
								createdBy={cards.createdBy}
								assignedTo={cards.assignedTo}
								updateTask={this.props.updateTask}
								deleteTask={this.props.deleteTask}
							/>
						);
					})}
			</div>
		);
	}
}

export default Done;
