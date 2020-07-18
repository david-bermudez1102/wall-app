import React, { useContext } from "react"
import { Form, Input, Button } from "antd"
import { handleLogin } from "../../../Actions/userActions"
import { Context } from "../../../Store"

const LoginForm = props => {
	const [, dispatch] = useContext(Context)

	const onFinish = data => {
		handleLogin(data)
			.then(currentUser => {
				localStorage.setItem("token", currentUser.token)
				dispatch({
					type: "SET_SESSION",
					session: { isLoggedIn: true, currentUser }
				})
			})
			.catch(console.log)
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
