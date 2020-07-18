import { ROOT_URL } from "./rootUrl"
import { handleErrors } from "./handleErrors"

const MESSAGES_URL = `${ROOT_URL}/messages/`

export const fethMessages = data =>
	fetch(MESSAGES_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}).then(handleErrors)
