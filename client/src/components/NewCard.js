import React from 'react';

const NewCard = (props) => (

	<form onSubmit={props.handleSubmit}>

		<label>
			Task:
				<input type="text" value={props.title} onChange={props.addNewCard}/>
		</label>
		<label>
			Priority:
				<select defaultValue="Low" value={props.priority} onChange={props.addNewCard}>
					<option value="Low">Low</option>
					<option value="High">High</option>
				</select>
		</label>
		<label>
			Status:
				<select defaultValue="In Progress" value={props.status} onChange={props.addNewCard}>
					<option value="In Progress">In Progress</option>
					<option value="Queue">Queue</option>
					<option value="Done">Done</option>
				</select>
		</label>
		<label>
			Assigned To:
				<input type="text" value={props.assignedTo} onChange={props.addNewCard}/>
		</label>
		<input type="submit" value="Add Task"/>
	</form>
);

export default NewCard;