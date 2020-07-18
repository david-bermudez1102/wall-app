import React, { useContext } from "react"
import { Context } from "../../../Store"
import Message from "./Message/Message"

const Messages = props => {
	const [state, dispatch] = useContext(Context)
	const { messages } = state
	return (
		<ul>
			{messages.map(m => (
				<Message />
			))}
		</ul>
	)
}

export default Messages
