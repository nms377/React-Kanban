export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

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


export function updateTask(id, title, priority, status, createdBy, assignedTo) {
	return {

		type: 'UPDATE_TASK',
		id,
		title,
		priority,
		status,
		createdBy,
		assignedTo
	}
}