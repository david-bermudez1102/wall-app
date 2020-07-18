export const messages = (state = [], action) => {
	switch (action.type) {
		case "SET_MESSAGES":
			return action.messages
		case "ADD_MESSAGE":
			return [action.message, ...state]
		case "REMOVE_MESSAGE":
			return state.filter(message => message.id !== action.message.id)
		case "UPDATE_MESSAGE":
			return state.map(message =>
				message.id === action.message.id ? action.message : message
			)
		default:
			return state
	}
}
