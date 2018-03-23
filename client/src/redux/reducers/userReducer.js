import { ADD_USER, ADD_USER_TO_STATE, LOG_OUT_USER_FROM_STATE, USER_ERROR_MESSAGE } from '../actions/userAction';

const initialState = {
	users: []
};

function users( state = initialState, action) {
	console.log('which user action: ', action.type);
	switch(action.type) {
		case ADD_USER:
			console.log('USERS ARE DISPLAYED')
			return Object.assign({}, state, {
				users: [
					...state.users,
				 {
				 		id: action.id,
						first_name: action.first_name,
						last_name: action.last_name,
						email: action.email,
						username: action.username,
						password: action.password
					}
				]
			});

		case ADD_USER_TO_STATE:
			console.log('USERS LOGGED IN AND ADDED TO STATE')
			return Object.assign({}, state, {
					users: [
						...state.users,
						{	id: action.id,
							username: action.username,
							loggedIn: action.loggedIn
						}
					]
			});

		case LOG_OUT_USER_FROM_STATE:
		return Object.assign({}, state, {
			loggedInUser: null
		});

		case USER_ERROR_MESSAGE:
		return Object.assign({}, state, 
			{
			userErrorMsg: action.userErrorMsg
		});

		default:
			return state;

	}
}

export default users;