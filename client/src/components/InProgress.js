import React from 'react';

const InProgress = (props) => (

	<div className="InProgress">
		<h2>{props.title}</h2>
		<p> Priority: {props.priority} </p>
		<p> Status: {props.status} </p>
		<p> Created By: {props.createdBy} </p>
		<p> Assigned To: {props.assignedTo} </p>
	</div>

);

export default InProgress;