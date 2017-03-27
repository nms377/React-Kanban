import { SHOW_TASK, ADD_TASK } from '../actions';

const initialState = {
	cards: []
};

function cards( state = initialState, action) {
	switch(action.type) {
		case SHOW_TASK:
			console.log('TASKS ARE DISPLAYING')
			return Object.assign({}, state, {
				cards:[
					...state.cards,
					{
						title: action.title,
						priority: action.priority,
						status: action.status,
						createdBy: action.createdBy,
						assignedTo: action.assignedTo
					}
				]
			})

			case 'ADD_TASK':

			return [
				...action.cards
			];

			default:
				return state;
	}
}

export default cards;