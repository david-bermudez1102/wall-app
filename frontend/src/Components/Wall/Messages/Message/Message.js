import React from "react"
import { Comment, Avatar } from "antd"
import formatDistance from "date-fns/formatDistance"

const Message = ({ message }) => {
	const { author, content, created, updated } = message
	const { username, first_name, last_name } = author

	return (
		<Comment
			actions={["Delete"]}
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
	)
}

export default Message
