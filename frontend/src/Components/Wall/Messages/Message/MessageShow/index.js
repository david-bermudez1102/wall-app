import React, { useState } from "react"
import { Result, Drawer } from "antd"
import { useRouteMatch, useHistory, Link } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux"
import MessageForm from "../MessageForm/MessageForm"
import Message from "../Message"

const MessageShow = () => {
	const { messages, session } = useSelector(
		({ messages, session }) => ({ messages, session }),
		shallowEqual
	)

	const currentUser = session.currentUser || {}
	const match = useRouteMatch()
	const history = useHistory()

	const { messageId } = match.params
	const message = messages.find(m => m.id === parseInt(messageId))
	const { user } = message || {}
	const [visible, setVisible] = useState(true)

	const onClose = () => {
		setVisible(false)
	}

	if (!message) return <Result status={"404"} />
	return (
		<Drawer
			width={640}
			placement='right'
			closable={false}
			onClose={onClose}
			visible={visible}
			afterVisibleChange={visible => (!visible ? history.push("/wall") : null)}>
			{currentUser.id === user.id && <MessageForm message={message} />}
			<Message message={message} />
		</Drawer>
	)
}

export default MessageShow
