export const SHOW_TASK = 'SHOW_TASK'

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