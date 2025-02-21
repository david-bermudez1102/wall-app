import React from "react"
import { handleSignUp } from "../../../Actions/userActions"
import { Form, Input, Button } from "antd"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons"

const SignUpForm = props => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)
	const dispatch = useDispatch()

	const handleSubmit = data => {
		dispatch(handleSignUp(data))
	}

	if (session.isLoggedIn) return <Redirect to={"/wall"} />

	return (
		<Form onFinish={handleSubmit} layout={"vertical"}>
			<Form.Item
				name={"first_name"}
				label={"First name"}
				rules={[
					{
						required: true
					}
				]}>
				<Input
					prefix={<UserOutlined />}
					type={"text"}
					placeholder={"Enter Your First Name"}
				/>
			</Form.Item>
			<Form.Item
				name={"last_name"}
				label={"Lastname"}
				rules={[
					{
						required: true
					}
				]}>
				<Input
					prefix={<UserOutlined />}
					type={"text"}
					placeholder={"Enter Your Lastname"}
				/>
			</Form.Item>
			<Form.Item
				name={"username"}
				label={"Username"}
				rules={[
					{
						required: true
					}
				]}>
				<Input
					prefix={<UserOutlined />}
					type={"text"}
					placeholder={"Enter a username"}
				/>
			</Form.Item>
			<Form.Item
				name={"email"}
				label={"Email"}
				rules={[
					{
						required: true
					}
				]}>
				<Input
					prefix={<MailOutlined />}
					type={"email"}
					placeholder={"Enter your email"}
				/>
			</Form.Item>
			<Form.Item
				name={"password"}
				label={"Password"}
				rules={[
					{
						required: true
					}
				]}>
				<Input
					prefix={<LockOutlined />}
					type={"password"}
					placeholder={"Create a password"}
				/>
			</Form.Item>
			<Form.Item>
				<Button htmlType={"submit"} type={"primary"} size={"large"} block>
					Sign Up!
				</Button>
			</Form.Item>
		</Form>
	)
}

export default SignUpForm
