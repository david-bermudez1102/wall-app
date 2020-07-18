import { ROOT_URL } from "./rootUrl"

const USERS_URL = `${ROOT_URL}/users/`

export const handleSignUp = data =>
	fetch(USERS_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(json => {
			localStorage.setItem("token", json.token)
			console.log(json)
		})
