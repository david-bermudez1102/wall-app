import { combineReducers } from "redux"
import { messages } from "./messagesReducer"
import { session } from "./sessionsReducer"
import { users } from "./usersReducer"

export const rootReducer = combineReducers({
	messages,
	session,
	users
})
