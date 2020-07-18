import React, { useContext } from "react"
import { Context } from "../../../Store"
import Message from "./Message/Message"
import { List } from "antd"

const Messages = props => {
	const [state, dispatch] = useContext(Context)
	const { messages } = state
	return (
		<List
			dataSource={messages}
			renderItem={message => <Message message={message} />}
		/>
	)
}

export default Messages
