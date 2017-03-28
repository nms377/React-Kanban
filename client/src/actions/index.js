export const ADD_TASK = 'ADD_TASK'
// export const UPDATE_CARD = 'ADD_TASK'

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


// export function addTask(title, priority, status, createdBy, assignedTo) {
// 	return {
// 		type: 'ADD_TASK',
// 		title,
// 		priority,
// 		status,
// 		createdBy,
// 		assignedTo
// 	};
// };