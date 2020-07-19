import { ROOT_URL } from "./rootUrl"
import { handleErrors } from "./handleErrors"
import { message } from "antd"

const MESSAGES_URL = `${ROOT_URL}/messages/`

export const fethMessages = () => dispatch =>
	fetch(MESSAGES_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(handleErrors)
		.then(messages => dispatch({ type: "SET_MESSAGES", messages }))
		.catch(console.log)

export const addMessage = data => dispatch =>
	fetch(MESSAGES_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `JWT ${localStorage.getItem("token")}`
		},
		body: JSON.stringify(data)
	})
		.then(handleErrors)
		.then(message => dispatch({ type: "ADD_MESSAGE", message }))
		.catch(err => {
			console.log(err)
			message.error(err.message)
		})

export const removeMessage = data => dispatch =>
	fetch(`${MESSAGES_URL}${data.id}/`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `JWT ${localStorage.getItem("token")}`
		}
	})
		.then(handleErrors)
		.then(message => dispatch({ type: "REMOVE_MESSAGE", message }))
		.catch(err => message.error(err.message))

export const updateMessage = data => dispatch =>
	fetch(`${MESSAGES_URL}${data.id}/`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			Authorization: `JWT ${localStorage.getItem("token")}`
		},
		body: JSON.stringify(data)
	})
		.then(handleErrors)
		.then(message => dispatch({ type: "UPDATE_MESSAGE", message }))
		.catch(err => message.error(err.message))
