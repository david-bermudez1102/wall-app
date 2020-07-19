import React from "react"
import SignUpForm from "./SignupForm/SignupForm"
import { Row, Col, Layout, Card } from "antd"
import Title from "antd/lib/typography/Title"
import Icon from "@ant-design/icons"

const SignUp = () => {
	return (
		<Layout
			style={{
				position: "absolute",
				width: "100%",
				minHeight: "100%",
				left: 0,
				top: 0
			}}>
			<Row justify={"center"} align={"middle"} style={{ minHeight: "100%" }}>
				<Col xxl={6} xl={8} lg={10} md={14} sm={20} xs={24}>
					<Card
						title={
							<Title level={3} style={{ marginBottom: 0 }}>
								<Icon
									component={() => <i className='fal fa-user-plus'></i>}
									style={{ verticalAlign: 0 }}
								/>{" "}
								SIGN UP
							</Title>
						}
						bordered={false}>
						<SignUpForm />
					</Card>
				</Col>
			</Row>
		</Layout>
	)
}

export default SignUp
