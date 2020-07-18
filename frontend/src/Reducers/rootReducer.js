import combineReducers from "react-combine-reducers"
import { messages } from "./messagesReducer"

export const [rootReducer, initialState] = combineReducers({
	messages: [messages, []]
})
