import React from "react"
import { Comment, Avatar, Tooltip } from "antd"
import formatDistance from "date-fns/formatDistance"
import { UserOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { format } from "date-fns"

const Message = ({ message }) => {
	const { author, content, created, updated } = message
	const { id, username, first_name, last_name } = author

	return (
		<Comment
			avatar={<Avatar icon={<UserOutlined />} />}
			author={
				<Link to={`/users/${id}`}>
					{first_name} {last_name} @{username}
				</Link>
			}
			content={content}
			datetime={
				<Tooltip
					title={
						<>
							Created: {format(new Date(created), "PPPppp")}
							<br />
							Updated: {format(new Date(updated), "PPPppp")}
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
