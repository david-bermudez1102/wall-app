import React from "react"
import { Form, Input, Button } from "antd"
import { handleLogin } from "../../../Actions/userActions"
import { useDispatch } from "react-redux"
import { UserOutlined, LockOutlined } from "@ant-design/icons"

const LoginForm = props => {
	const dispatch = useDispatch()

	const onFinish = data => {
		dispatch(handleLogin(data))
	}

	return (
		<Form onFinish={onFinish} layout={"vertical"} size={"large"}>
			<Form.Item
				name={"username"}
				label={"Username"}
				rules={[
					{
						required: true,
						message: "Enter your username."
					}
				]}>
				<Input
					prefix={<UserOutlined />}
					type={"text"}
					placeholder={"Your Username"}
				/>
			</Form.Item>
			<Form.Item
				name={"password"}
				label={"Password"}
				rules={[
					{
						required: true,
						message: "Enter your password."
					}
				]}>
				<Input
					prefix={<LockOutlined />}
					type={"password"}
					placeholder={"Your Password"}
				/>
			</Form.Item>
			<Form.Item>
				<Button htmlType={"submit"} type={"primary"} block size={"large"}>
					Login
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm
