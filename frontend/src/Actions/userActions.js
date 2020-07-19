import { ROOT_URL } from "./rootUrl"
import { handleErrors } from "./handleErrors"
import { message } from "antd"

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
		.catch(err => message.error(err.message))

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
		.catch(err => message.error(err.message))

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
		.catch(() => {
			localStorage.removeItem("token")
		})

export const handleLogout = () => async dispatch => {
	localStorage.removeItem("token")
	return await dispatch({
		type: "LOGOUT"
	})
}

export const fetchUsers = () => dispatch =>
	fetch(CURRENT_USER_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `JWT ${localStorage.getItem("token")}`
		}
	})
		.then(handleErrors)
		.then(users => {
			dispatch({
				type: "SET_USERS",
				users
			})
		})
