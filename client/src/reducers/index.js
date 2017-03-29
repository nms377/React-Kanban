import { ADD_TASK, UPDATE_TASK } from '../actions'

const initialState = {
	cards: []
};

function cards( state = initialState, action) {
	console.log('which action: ', action.type);
	switch(action.type) {
		case ADD_TASK:
			console.log('TASKS WERE DISPLAYED')
			return Object.assign({}, state, {
				cards: [
					...state.cards,
					{
						id: action.id,
						title: action.title,
						priority: action.priority,
						status: action.status,
						createdBy: action.createdBy,
						assignedTo: action.assignedTo
					}
				]
			});

		case UPDATE_TASK:
			let updatedCard = state.cards.map(card => {
				if(cards.id === action.id){
					cards.status = action.status;
					return cards;
				}else {
					return cards
				}
			})
			console.log('TASKS WERE UDPATED');
			return Object.assign({}, state, {
				cards: [
					...updatedCard
				]
			})

		default:
			return state;
	}
}

export default cards;