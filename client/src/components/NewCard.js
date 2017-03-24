import React from 'react';

const NewCard = (props) => (

	<form onSubmit={props.handleSubmit}>

		<label>
			Task:
				<input type="text" value={props.title} onChange={props.handleChange}/>
		</label>
		<label>
			Priority:
				<select defaultValue="Low" value={props.priority} onChange={props.handleChange}>
					<option value="High">High</option>
					<option value="Low">Low</option>
				</select>
		</label>
		<label>
			Status:
				<select defaultValue="In Progress" value={props.status} onChange={props.handleCahnge}>
					<option value="In Progress">In Progress</option>
					<option value="Queue">Queue</option>
					<option value="Done">Done</option>
				</select>
		</label>
		<label>
			Assigned To:
				<input type="text" value={props.value}/>
		</label>
		<input type="submit" value="Submit"/>
	</form>
);

export default NewCard;