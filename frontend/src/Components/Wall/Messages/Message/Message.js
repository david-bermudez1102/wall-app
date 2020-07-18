import React from "react"
import { Comment } from "antd"
import formatDistance from "date-fns/formatDistance"

const Message = ({ message }) => {
	const { author, content, created, updated } = message
	return (
		<Comment
			author={<a>{author.username}</a>}
			content={content}
			datetime={formatDistance(new Date(created), new Date(), {
				addSuffix: true
			})}
		/>
	)
}

export default Message
