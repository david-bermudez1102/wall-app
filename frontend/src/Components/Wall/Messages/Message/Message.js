import React from "react"
import { Comment } from "antd"

const Message = ({ message }) => {
	const { author, content, created, updated } = message
	return <Comment author={<a>{author.username}</a>} content={content} />
}

export default Message
