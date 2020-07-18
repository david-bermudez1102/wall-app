import React from "react"
import PropTypes from "prop-types"

const SignUpForm = props => {
	return (
		<form>
			<input type={"text"} placeholder={"Enter Your name"} />
			<input type={"text"} placeholder={"Enter a username"} />
			<input type={"password"} placeholder={"Create a password"} />
			<input type={"submit"} />
		</form>
	)
}

SignUpForm.propTypes = {}

export default SignUpForm
