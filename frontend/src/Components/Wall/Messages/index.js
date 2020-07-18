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
			<Col xxl={10} xl={11} lg={12} md={18} sm={20} xs={24}>
				<Card size={"small"} bordered={false} title={"Wall Messages"}>
					<List
						dataSource={messages}
						renderItem={message => (
							<List.Item>
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
