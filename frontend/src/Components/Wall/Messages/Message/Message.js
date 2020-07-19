import React, { useEffect, useState, useRef } from "react"
import { Comment, Avatar, Tooltip, Button } from "antd"
import formatDistance from "date-fns/formatDistance"
import { UserOutlined, CommentOutlined, MoreOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import { useSelector, shallowEqual } from "react-redux"
import ReplyEditor from "./ReplyEditor"
import "./styles.scss"

const Message = ({ message, children }) => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)
	const currentUser = session.currentUser || {}

	const { user, content, created, updated } = message
	const { username, first_name, last_name } = user

	const [currentDate, setCurrentDate] = useState(new Date())
	const [replyFormOpen, setReplyFormOpen] = useState(false)
	const [commentsOpen, setCommentsOpen] = useState(false)
	const timerId = useRef() // Used to handle time distance change

	useEffect(() => {
		timerId.current = setInterval(() => setCurrentDate(new Date()), 2000)
		return () => {
			clearInterval(timerId.current)
		}
	}, [])

	return (
		<Comment
			className={children ? undefined : "comment"}
			actions={[
				children && session.isLoggedIn && (
					<span onClick={() => setReplyFormOpen(!replyFormOpen)}>Reply to</span>
				),
				children && (
					<span>
						<Button
							icon={<CommentOutlined />}
							type={"text"}
							shape={"circle"}
							style={{ color: "inherit" }}
							onClick={() => setCommentsOpen(!commentsOpen)}></Button>
						{message.replies.length > 0 ? message.replies.length : 0}
					</span>
				),
				!children && (
					<Button
						icon={<MoreOutlined />}
						type={"text"}
						shape={"circle"}
						onClick={() => setCommentsOpen(!commentsOpen)}
					/>
				)
			].filter(a => a)}
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
					{formatDistance(new Date(created), currentDate, {
						addSuffix: true
					})}
				</Tooltip>
			}>
			{children && replyFormOpen && (
				<ReplyEditor messageId={message.id} currentUser={currentUser} />
			)}
			{commentsOpen && children}
		</Comment>
	)
}

export default Message
