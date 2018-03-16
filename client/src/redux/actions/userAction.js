export const ADD_USER = 'ADD_USER'
export const ADD_USER_TO_STATE = 'ADD_USER_TO_STATE'
export const LOG_OUT_USER_FROM_STATE = 'LOG_OUT_USER_FROM_STATE'
export const USER_ERROR_MESSAGE = 'USER_ERROR_MESSAGE'


export function addUser(id, name, username, password) {
	return {
		type: ADD_USER,
		id,
		name,
		username,
		password
	};
}

export function addUserToState(id, username, loggedIn){
	return {
		type: ADD_USER_TO_STATE,
		id,
		username,
		loggedIn
	};
}

export function logOutUserFromState(){
	return {
		type: LOG_OUT_USER_FROM_STATE
	};
}

export function userErrMsg(userErrMsg) {
	return {
		type: USER_ERROR_MESSAGE,
		userErrMsg
	};
}