import React, { useState } from "react"
import { handleSignUp } from "../../../Actions/userActions"
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
		<form onSubmit={handleSubmit}>
			<input
				name={"name"}
				type={"text"}
				placeholder={"Enter Your name"}
				onChange={onChange}
			/>
			<input
				name={"username"}
				type={"text"}
				placeholder={"Enter a username"}
				onChange={onChange}
			/>
			<input
				name={"email"}
				type={"email"}
				placeholder={"Enter your email"}
				onChange={onChange}
			/>
			<input
				name={"password"}
				type={"password"}
				placeholder={"Create a password"}
				onChange={onChange}
			/>
			<input type={"submit"} />
		</form>
	)
}

export default SignUpForm
