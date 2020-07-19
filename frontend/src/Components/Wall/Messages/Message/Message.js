import React from "react"
import { Comment, Avatar, Tooltip } from "antd"
import formatDistance from "date-fns/formatDistance"
import { UserOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import { useSelector, shallowEqual } from "react-redux"

const Message = ({ message }) => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)
	const currentUser = session.currentUser || {}

	const { user, content, created, updated } = message
	const { username, first_name, last_name } = user

	return (
		<Comment
			avatar={<Avatar icon={<UserOutlined />} />}
			author={
				<Link to={`/users/${username}`}>
					{first_name} {last_name} @{username}
					{currentUser.id === user.id && <> (Me)</>}
				</Link>
			}
			content={content}
			datetime={
				<Tooltip
					title={
						<>
							Created: {format(new Date(created), "PPPp")}
							<br />
							Updated: {format(new Date(updated), "PPPp")}
						</>
					}>
					{formatDistance(new Date(created), new Date(), {
						addSuffix: true
					})}
				</Tooltip>
			}
		/>
	)
}

export default Message
