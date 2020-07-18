import React, { useContext } from "react"
import Message from "./Message/Message"
import { List, Row, Col, Card } from "antd"
import { useSelector, shallowEqual } from "react-redux"

const Messages = props => {
	const { messages } = useSelector(
		({ messages }) => ({ messages }),
		shallowEqual
	)
	return (
		<Row justify={"center"} gutter={[16, 16]}>
			<Col span={8}>
				<Card size={"small"} bordered={false} title={"Wall Messages"}>
					<List
						dataSource={messages}
						renderItem={message => <Message message={message} />}
					/>
				</Card>
			</Col>
		</Row>
	)
}

export default Messages
