import React from "react"
import { Row, Col, Card } from "antd"
import MessageForm from "./MessageForm"
import { useSelector, shallowEqual } from "react-redux"
import Title from "antd/lib/typography/Title"
import { PlusOutlined } from "@ant-design/icons"
import LoginOrSignupMessage from "../../../../Signup/LoginOrSignUpMessage"

const MessageFormLayout = () => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)
	return (
		<Row justify={"center"} gutter={[16, 16]}>
			<Col xxl={10} xl={11} lg={12} md={18} sm={20} xs={24}>
				<Card size={"small"} bordered={false}>
					{session.isLoggedIn ? (
						<Card.Meta
							title={
								<Title level={3}>
									<PlusOutlined /> Create a new message
								</Title>
							}
							description={<MessageForm />}
						/>
					) : (
						<LoginOrSignupMessage />
					)}
				</Card>
			</Col>
		</Row>
	)
}

export default MessageFormLayout
