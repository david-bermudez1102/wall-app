export const session = (state = { isLoggedIn: false }, action) => {
	switch (action.type) {
		case "SET_SESSION":
			return action.session
		case "LOGOUT":
			return {
				isLoggedIn: false
			}
		default:
			return state
	}
}
