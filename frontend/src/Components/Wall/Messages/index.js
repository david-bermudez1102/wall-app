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
					style={{ border: 0 }}
					onClick={() => dispatch(removeMessage(message))}
					danger>
					<DeleteOutlined />
				</Button>
			),
			currentUser.id === message.author.id && (
				<Link to={`/wall/messages/${message.id}/edit`}>
					<Button style={{ border: 0 }} size={"small"}>
						<EditOutlined />
					</Button>
				</Link>
			),
			<Link to={`/wall/messages/${message.id}`}>
				<Button style={{ border: 0 }} size={"small"}>
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
