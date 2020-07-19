import React, { useState } from "react"
import { Comment, Avatar, Result, Drawer } from "antd"
import formatDistance from "date-fns/formatDistance"
import { useRouteMatch, useHistory, Link } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux"
import MessageForm from "../MessageForm/MessageForm"

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
	const { user, content, created, updated } = message || {}
	const { username, first_name, last_name } = user || {}
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
			<Comment
				avatar={<Avatar />}
				author={
					<Link to={`/users/${user.id}`}>
						{first_name} {last_name} @{username}
					</Link>
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
