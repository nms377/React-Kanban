export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export function addTask(id, title, priority, status, createdBy, assignedTo) {
	return {
		type: 'ADD_TASK',
		id,
		title,
		priority,
		status,
		createdBy,
		assignedTo
	};
};


export function updateTask(title,status) {
	return {
		type: 'UPDATE_TASK',
		title,
		status
	};
};

export function deleteTask(title) {
	return {
		type: 'DELETE_TASK',
		title
	};
};