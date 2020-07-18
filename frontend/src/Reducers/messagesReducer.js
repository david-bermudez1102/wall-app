export const messages = (state = [], action) => {
	switch (action.type) {
		case "SET_MESSAGES":
			return action.messages
		case "ADD_POST":
			return {
				...state,
				messages: state.messages.concat(action.payload)
			}
		case "REMOVE_POST":
			return {
				...state,
				messages: state.messages.filter(post => post.id !== action.payload)
			}
		case "SET_ERROR":
			return {
				...state,
				error: action.payload
			}
		default:
			return state
	}
}
