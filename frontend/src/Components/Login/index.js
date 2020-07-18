import React from "react"
import LoginForm from "./LoginForm/LoginForm"
import { useSelector, shallowEqual } from "react-redux"
import { Redirect } from "react-router-dom"

const Login = () => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)

	if (session.isLoggedIn) return <Redirect to={"/wall"} />
	return <LoginForm />
}

export default Login
