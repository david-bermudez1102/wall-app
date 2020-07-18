import React from "react"
import PropTypes from "prop-types"

const LoginForm = props => {
	return (
		<div>
			<form>
				<input type={"text"} placeholder={"Your Username"} />
				<input type={"password"} placeholder={"Your Password"} />
				<input type={"submit"} />
			</form>
		</div>
	)
}

LoginForm.propTypes = {}

export default LoginForm
