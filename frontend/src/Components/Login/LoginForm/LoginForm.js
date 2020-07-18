import React, { useContext } from "react"
import { Form, Input, Button } from "antd"
import { handleLogin } from "../../../Actions/userActions"
import { useDispatch } from "react-redux"

const LoginForm = props => {
	const dispatch = useDispatch()

	const onFinish = data => {
		dispatch(handleLogin(data))
	}

	return (
		<Form onFinish={onFinish}>
			<Form.Item name={"username"}>
				<Input type={"text"} placeholder={"Your Username"} />
			</Form.Item>
			<Form.Item name={"password"}>
				<Input type={"password"} placeholder={"Your Password"} />
			</Form.Item>
			<Form.Item>
				<Button htmlType={"submit"} type={"primary"}>
					Login
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm
