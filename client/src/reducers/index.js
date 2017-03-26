import { SHOW_TASK } from '../actions'

const initialState = {
	cards: []
};

function cards( state = initialState, action) {
	switch(action.type) {
		case SHOW_TASK:
			console.log('TASKS WERE DISPLAYED')
			return Object.assign({}, state, {
				cards: [
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
		default:
			return state;
	}
}

export default cards;