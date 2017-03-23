import React from 'react';

const InProgress = (props) => (

	<div className="InProgress-header">
		<h2>{props.title}</h2>
		<p> Priority: {props.priority} </p>
		<p> Status: {props.status} </p>
	</div>

);

export default InProgress;