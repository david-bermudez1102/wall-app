import React, { useState } from "react"
import { Comment, Avatar, Empty, Result, Drawer } from "antd"
import formatDistance from "date-fns/formatDistance"
import { useRouteMatch, useHistory } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux"
import Message from "../Message"
import MessageForm from "../MessageForm/MessageForm"

const MessageShow = () => {
	const { messages, session } = useSelector(
		({ messages, session }) => ({ messages, session }),
		shallowEqual
	)
	const match = useRouteMatch()
	const history = useHistory()

	const { messageId } = match.params
	const message = messages.find(m => m.id === parseInt(messageId))
	const { author, content, created, updated } = message || {}
	const { username, first_name, last_name } = author || {}
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
			<MessageForm message={message} />
			<Comment
				avatar={<Avatar />}
				author={
					<a>
						{first_name} {last_name} @{username}
					</a>
				}
				content={content}
				datetime={formatDistance(new Date(created), new Date(), {
					addSuffix: true
				})}
			/>
		</Drawer>
	)
}

export default MessageShow
