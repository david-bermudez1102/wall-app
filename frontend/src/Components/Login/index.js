import React from "react"
import LoginForm from "./LoginForm/LoginForm"
import { useSelector, shallowEqual } from "react-redux"
import { Redirect } from "react-router-dom"
import { Row, Col } from "antd"

const Login = () => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)

	if (session.isLoggedIn) return <Redirect to={"/wall"} />
	return (
		<Row gutter={[16, 16]} justify={"center"}>
			<Col span={8}>
				<LoginForm />
			</Col>
		</Row>
	)
}

export default Login
