import React from 'react';

const Queue = ( props ) => (

	<div className="Queue-header">
		<h2>{props.title}</h2>
		<p> Priority: {props.priority}</p>
		<p> Status: {props.status}</p>
		<p> Created By: {props.createdBy}</p>
		<p> Assigned To: {props.assignedTo}</p>
	</div>
);

export default Queue;