import React from "react"
import App from "../App"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import configureStore from "redux-mock-store"

import { BrowserRouter as Router } from "react-router-dom"
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import Navbar from "../Components/Navbar"

const mockStore = configureStore([thunk])

test("Renders navbar login, Wall and Signup if user is not logged in", () => {
	const store = mockStore({ session: { isLoggedIn: false } })
	const { getByText, getByRole, getAllByText } = render(
		<Provider store={store}>
			<Router>
				<Navbar />
			</Router>
		</Provider>
	)
	const linkElement = getAllByText(/Wall|Login|Signup/g)
	expect(linkElement).toHaveLength(3)
})

test("Renders navbar Wall and Logout links if user is logged in", () => {
	const store = mockStore({ session: { isLoggedIn: true } })
	const { getByText, getByRole, getAllByText } = render(
		<Provider store={store}>
			<Router>
				<Navbar />
			</Router>
		</Provider>
	)
	const linkElement = getAllByText(/Wall|Logout/g)
	expect(linkElement).toHaveLength(2)
})
