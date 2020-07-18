import React from "react"
import { Form, Input, Button, Checkbox } from "antd"

const LoginForm = props => {
	return (
		<Form>
			<Form.Item>
				<Input type={"text"} placeholder={"Your Username"} />
			</Form.Item>
			<Form.Item>
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
