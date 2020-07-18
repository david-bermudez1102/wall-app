import { combineReducers } from "redux"
import { messages } from "./messagesReducer"
import { session } from "./sessionsReducer"

export const rootReducer = combineReducers({
	messages,
	session
})
