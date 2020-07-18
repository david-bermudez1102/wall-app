import React, { useState } from "react"
import { handleSignUp } from "../../../Actions/userActions"
import { Form, Input, Button } from "antd"
const SignUpForm = props => {
	const [state, setState] = useState({
		name: "",
		username: "",
		email: "",
		password: ""
	})

	const onChange = e => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		handleSignUp(state)
	}

	return (
		<Form onSubmit={handleSubmit} layout={"vertical"}>
			<Form.Item name={"name"} label={"Name"}>
				<Input
					type={"text"}
					placeholder={"Enter Your name"}
					onChange={onChange}
				/>
			</Form.Item>
			<Form.Item name={"username"} label={"Username"}>
				<Input
					type={"text"}
					placeholder={"Enter a username"}
					onChange={onChange}
				/>
			</Form.Item>
			<Form.Item name={"email"} label={"Email"}>
				<Input
					type={"email"}
					placeholder={"Enter your email"}
					onChange={onChange}
				/>
			</Form.Item>
			<Form.Item name={"password"} label={"Password"}>
				<Input
					type={"password"}
					placeholder={"Create a password"}
					onChange={onChange}
				/>
			</Form.Item>
			<Form.Item>
				<Button htmlType={"submit"} type={"primary"}>
					Sign Up!
				</Button>
			</Form.Item>
		</Form>
	)
}

export default SignUpForm
