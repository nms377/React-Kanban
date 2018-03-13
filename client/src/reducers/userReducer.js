import { ADD_USER, ADD_USER_TO_STATE, LOG_OUT_USER_FROM_STATE, USER_ERROR_MESSAGE } from '../actions/userAction.js';

const initialState = {
	users: []
};

function users(state=initialState, action) {
	switch(action.type) {
		case ADD_USER:
		return Object.assign({}, state, {
			users: [
				...state.users, {
					name: action.first_name,
					username: action.username,
					password: action.password
				}
			]
		});

		case ADD_USER_TO_STATE:
		return Object.assign({}, state, {
			loggedInUser: {
				id: action.id,
				username: action.username,
				loggedIn: action.loggedIn
			}
		});

		case LOG_OUT_USER_FROM_STATE:
		return Object.assign({}, state, {
			loggedInUser: null
		});

		case USER_ERROR_MESSAGE:
		return Object.assign({}, state, {
			userErrMsg: action.userErrMsg
		});

		default:
			return state;

	}
}

export default users;