import React from 'react';

const MainBoard = (props) => (

	<div className="Main-header">
		<h2>{props.mainTitle}</h2>
		<p> { props.title }</p>
		<p> { props.priority }</p>
		<p> { props.status }</p>
	</div>

);

export default MainBoard;