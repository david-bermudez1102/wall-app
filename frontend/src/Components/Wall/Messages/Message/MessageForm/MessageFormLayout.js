import React from "react"
import { Form, Row, Col, Card } from "antd"
import MessageForm from "./MessageForm"

const MessageFormLayout = () => {
	return (
		<Row justify={"center"} gutter={[16, 16]}>
			<Col xxl={10} xl={11} lg={12} md={18} sm={20} xs={24}>
				<Card size={"small"} bordered={false}>
					<Card.Meta
						title={"Create a new message"}
						description={<MessageForm />}
					/>
				</Card>
			</Col>
		</Row>
	)
}

export default MessageFormLayout
