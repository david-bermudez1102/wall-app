export const messages = (state = [], action) => {
	switch (action.type) {
		case "SET_MESSAGES":
			return action.messages
		case "ADD_MESSAGE":
			return [action.message, ...state]
		case "REMOVE_MESSAGE":
			return state.messages.filter(message => message.id !== action.message.id)
		default:
			return state
	}
}
