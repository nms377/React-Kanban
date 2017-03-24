import React from 'react';

const MainBoard = (props) => (

	<div className="Main-header">
		<h2>{props.mainTitle}</h2>
		<button type="submit" >Create New Card</button>
	</div>

);

export default MainBoard;