import React from "react"
import LoginForm from "./LoginForm/LoginForm"
import { useSelector, shallowEqual } from "react-redux"
import { Redirect } from "react-router-dom"
import { Row, Col, Layout, Card } from "antd"
import Title from "antd/lib/typography/Title"
import Icon from "@ant-design/icons"

const Login = () => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)

	if (session.isLoggedIn) return <Redirect to={"/wall"} />
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
					<Card
						title={
							<Title level={3} style={{ marginBottom: 0 }}>
								<Icon
									component={() => <i className='fal fa-sign-in-alt'></i>}
									style={{ verticalAlign: 0 }}
								/>{" "}
								LOGIN
							</Title>
						}
						bordered={false}>
						<LoginForm />
					</Card>
				</Col>
			</Row>
		</Layout>
	)
}

export default Login
