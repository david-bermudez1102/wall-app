import { ROOT_URL } from "./rootUrl"
import { handleErrors } from "./handleErrors"

const USERS_URL = `${ROOT_URL}/users/`
const LOGIN_URL = `${ROOT_URL}/token-auth/`

export const handleSignUp = data =>
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

export const handleLogin = data =>
	fetch(LOGIN_URL, {
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
