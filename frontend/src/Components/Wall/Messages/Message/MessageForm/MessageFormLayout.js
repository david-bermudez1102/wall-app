import React from "react"
import { Row, Col, Card, Button } from "antd"
import MessageForm from "./MessageForm"
import { useSelector, shallowEqual } from "react-redux"
import { Link } from "react-router-dom"
import Title from "antd/lib/typography/Title"
import { PlusOutlined } from "@ant-design/icons"

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
						<Card.Meta
							title={
								<div style={{ textAlign: "center", width: "100%" }}>
									Login or Signup to post a message on the wall!
								</div>
							}
							description={
								<div style={{ textAlign: "center", width: "100%" }}>
									<Link to={"/login"}>
										<Button style={{ marginRight: 16 }}>Login</Button>
									</Link>
									<Link to={"/signup"}>
										<Button>Signup</Button>
									</Link>
								</div>
							}
						/>
					)}
				</Card>
			</Col>
		</Row>
	)
}

export default MessageFormLayout
