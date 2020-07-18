import React from "react"
import Message from "./Message/Message"
import { List, Row, Col, Card, Button } from "antd"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons"
import { removeMessage } from "../../../Actions/wallActions"
import { Link } from "react-router-dom"

const Messages = props => {
	const { messages, session } = useSelector(
		({ messages, session }) => ({ messages, session }),
		shallowEqual
	)
	const dispatch = useDispatch()

	const currentUser = session || {}
	const getActions = message => {
		return [
			currentUser.id === message.author.id && (
				<Button
					size={"small"}
					onClick={() => dispatch(removeMessage(message))}
					shape={"circle"}
					danger>
					<DeleteOutlined />
				</Button>
			),
			<Link to={`/wall/messages/${message.id}/edit`}>
				<Button shape={"circle"} size={"small"}>
					<EditOutlined />
				</Button>
			</Link>,
			<Link to={`/wall/messages/${message.id}`}>
				<Button shape={"circle"} size={"small"}>
					<EyeOutlined />
				</Button>
			</Link>
		].filter(link => link)
	}
	return (
		<Row justify={"center"} gutter={[16, 16]}>
			<Col xxl={10} xl={11} lg={12} md={18} sm={20} xs={24}>
				<Card size={"small"} bordered={false} title={"Wall Messages"}>
					<List
						itemLayout={"horizontal"}
						dataSource={messages}
						renderItem={message => (
							<List.Item actions={getActions(message)}>
								<Message message={message} />
							</List.Item>
						)}
					/>
				</Card>
			</Col>
		</Row>
	)
}

export default Messages
