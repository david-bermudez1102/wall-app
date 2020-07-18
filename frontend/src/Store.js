import React, { createContext, useReducer } from "react"
import { rootReducer, initialState } from "./Reducers/rootReducer"

const Store = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, initialState)
	return (
		<Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
	)
}

export const Context = createContext(initialState)
export default Store
