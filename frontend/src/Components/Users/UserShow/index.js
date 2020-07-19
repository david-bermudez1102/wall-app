import React from "react"
import { Row, Col, Card, Result, Descriptions, Avatar } from "antd"
import { useRouteMatch } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux"
import Title from "antd/lib/typography/Title"
import DescriptionsItem from "antd/lib/descriptions/Item"
import { UserOutlined } from "@ant-design/icons"
import Messages from "../../Wall/Messages"
import LoginOrSignupMessage from "../../Signup/LoginOrSignUpMessage"

const UserShow = () => {
	const match = useRouteMatch()
	const { username } = match.params
	const { users, messages, session } = useSelector(
		({ users, messages, session }) => ({ users, messages, session }),
		shallowEqual
	)

	const currentUser = session.currentUser || {}

	const user = users.find(u => u.username === username)
	const { first_name, last_name, email } = user || {}
	const userMessages = messages.filter(m => m.user.id === (user || {}).id)

	if (!user && session.isLoggedIn) return <Result status={404} />
	return (
		<>
			<Row justify={"center"} gutter={[16, 16]}>
				<Col xxl={10} xl={11} lg={12} md={18} sm={20} xs={24}>
					<Card size={"small"} bordered={false}>
						{session.isLoggedIn && (
							<Descriptions
								column={2}
								title={
									<Title level={3}>
										<Avatar icon={<UserOutlined />} />
										{first_name} {last_name} @{username}
										{currentUser.id === user.id && <> (Me)</>}
									</Title>
								}>
								<DescriptionsItem label='Email'>{email}</DescriptionsItem>
								<DescriptionsItem label='Total Messages'>
									{userMessages.length}
								</DescriptionsItem>
							</Descriptions>
						)}
						{!session.isLoggedIn && (
							<LoginOrSignupMessage
								customMessage={<>Login or Signup to see @{username} profile!</>}
							/>
						)}
					</Card>
				</Col>
			</Row>
			<Messages userMessages={userMessages} user={user || {}} />
		</>
	)
}

export default UserShow
