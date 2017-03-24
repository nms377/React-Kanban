import React from 'react';

const Done = (props) => (

	<div className="Done">		
		<h2>{props.title}</h2>
		<p> Priority: {props.priority}</p>
		<p> Status: {props.status}</p>
		<p> Created By: {props.createdBy}</p>
		<p>Assigend To: {props.assignedTo}</p>
	</div>

);

export default Done;