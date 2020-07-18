import React, { useState } from "react"
import { handleSignUp } from "../../../Actions/userActions"
import { Form, Input, Button } from "antd"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
const SignUpForm = props => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)
	const dispatch = useDispatch()

	const handleSubmit = data => {
		dispatch(handleSignUp(data))
	}

	if (session.isLoggedIn) return <Redirect to={"/wall"} />

	return (
		<Form onFinish={handleSubmit} layout={"vertical"}>
			<Form.Item name={"first_name"} label={"Name"}>
				<Input type={"text"} placeholder={"Enter Your First Name"} />
			</Form.Item>
			<Form.Item name={"last_name"} label={"Lastname"}>
				<Input type={"text"} placeholder={"Enter Your Lastname"} />
			</Form.Item>
			<Form.Item name={"username"} label={"Username"}>
				<Input type={"text"} placeholder={"Enter a username"} />
			</Form.Item>
			<Form.Item name={"email"} label={"Email"}>
				<Input type={"email"} placeholder={"Enter your email"} />
			</Form.Item>
			<Form.Item name={"password"} label={"Password"}>
				<Input type={"password"} placeholder={"Create a password"} />
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
