import React from "react"
import SignUpForm from "./SignupForm/SignupForm"
import { Row, Col, Layout, Card } from "antd"

const SignUp = () => {
	return (
		<Layout
			style={{
				position: "absolute",
				width: "100%",
				height: "100%",
				left: 0,
				top: 0
			}}>
			<Row justify={"center"} align={"middle"} style={{ height: "100%" }}>
				<Col xxl={6} xl={8} lg={10} md={14} sm={20} xs={24}>
					<Card title={"SIGN UP"} bordered={false}>
						<SignUpForm />
					</Card>
				</Col>
			</Row>
		</Layout>
	)
}

export default SignUp
