import { handleErrors } from "./handleErrors"
import { message } from "antd"
import { ROOT_URL } from "./rootUrl"

const MESSAGES_URL = `${ROOT_URL}/messages/`

export const sendReply = data => dispatch =>
	fetch(`${MESSAGES_URL}${data.message_id}/replies/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `JWT ${localStorage.getItem("token")}`
		},
		body: JSON.stringify(data)
	})
		.then(handleErrors)
		.then(reply => dispatch({ type: "ADD_MESSAGE_REPLIES", reply }))
		.catch(err => message.error(err.message))
