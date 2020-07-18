import React from "react"
import SignUpForm from "./SignupForm/SignupForm"
import { Row, Col } from "antd"

const SignUp = () => {
	return (
		<Row gutter={[16, 16]} justify={"center"}>
			<Col span={8}>
				<SignUpForm />
			</Col>
		</Row>
	)
}

export default SignUp
