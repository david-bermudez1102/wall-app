import { ROOT_URL } from "./rootUrl"
import { handleErrors } from "./handleErrors"

const USERS_URL = `${ROOT_URL}/users/`
const LOGIN_URL = `${ROOT_URL}/token-auth/`
const CURRENT_USER_URL = `${ROOT_URL}/current_user/`

export const handleSignUp = data => dispatch =>
	fetch(USERS_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})
		.then(handleErrors)
		.then(json => {
			localStorage.setItem("token", json.token)
			console.log(json)
		})

export const handleLogin = data => dispatch =>
	fetch(LOGIN_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})
		.then(handleErrors)
		.then(currentUser => {
			localStorage.setItem("token", currentUser.token)
			dispatch({
				type: "SET_SESSION",
				session: { isLoggedIn: true, currentUser }
			})
		})
		.catch(console.log)

export const fetchSession = () => dispatch =>
	fetch(CURRENT_USER_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",

			Authorization: `JWT ${localStorage.getItem("token")}`
		}
	})
		.then(handleErrors)
		.then(currentUser => {
			dispatch({
				type: "SET_SESSION",
				session: { isLoggedIn: true, currentUser }
			})
		})
		.catch(console.log)

export const handleLogout = () => dispatch => {
	localStorage.removeItem("token")
	return dispatch({
		type: "LOGOUT"
	})
}
