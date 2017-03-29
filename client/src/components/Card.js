import React from 'react';

const Card = (props) => (

	<div className="Cards">
		<p>{props.title}</p>
		<p>Priority: {props.priority}</p>
		<p>Status: {props.status}</p>
		<p>Created By: {props.createdBy}</p>
		<p>Assign To: {props.assignedTo}</p>
	</div>

);

export default Card;