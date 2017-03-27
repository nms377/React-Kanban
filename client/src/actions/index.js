export const SHOW_TASK = 'SHOW_TASK'
export const ADD_TASK = 'ADD_TASK'

export function showTasks(title, priority, status, createdBy, assignedTo) {
	return {
		type: 'SHOW_TASK',
		title,
		priority,
		status,
		createdBy,
		assignedTo
	};
};


export function addTask(title, priority, status, createdBy, assignedTo) {
	return {
		type: 'ADD_TASK',
		title,
		priority,
		status,
		createdBy,
		assignedTo
	};
};

