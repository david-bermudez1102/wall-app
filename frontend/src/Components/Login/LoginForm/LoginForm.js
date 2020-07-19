import React from "react"
import { Form, Input, Button } from "antd"
import { handleLogin } from "../../../Actions/userActions"
import { useDispatch } from "react-redux"

const LoginForm = props => {
	const dispatch = useDispatch()

	const onFinish = data => {
		dispatch(handleLogin(data))
	}

	return (
		<Form onFinish={onFinish} layout={"vertical"}>
			<Form.Item
				name={"username"}
				label={"Username"}
				rules={[
					{
						required: true,
						message: "Enter your username."
					}
				]}>
				<Input type={"text"} placeholder={"Your Username"} />
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
				<Input type={"password"} placeholder={"Your Password"} />
			</Form.Item>
			<Form.Item>
				<Button htmlType={"submit"} type={"primary"} block>
					Login
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm
