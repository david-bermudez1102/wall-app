import React from "react"
import { Card, Layout, Row, Col, Button } from "antd"
import { useSelector, shallowEqual } from "react-redux"
import Title from "antd/lib/typography/Title"
import { Redirect, Link } from "react-router-dom"
import Icon, { EyeOutlined } from "@ant-design/icons"

const Home = () => {
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
				<Col xxl={8} xl={10} lg={10} md={14} sm={20} xs={24}>
					<Card bordered={false}>
						<Card.Meta
							title={
								<Title style={{ textAlign: "center" }}>
									Welcome to Wall App!
								</Title>
							}
						/>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								paddingTop: 24
							}}>
							<Link to={"/wall"}>
								<Button size={"large"} icon={<EyeOutlined />}>
									View Wall
								</Button>
							</Link>
							<Link to={"/signup"}>
								<Button
									size={"large"}
									icon={
										<Icon
											component={() => <i className='fal fa-user-plus'></i>}
											style={{ verticalAlign: 0 }}
										/>
									}>
									Signup
								</Button>
							</Link>
							<Link to={"/login"}>
								<Button
									size={"large"}
									icon={
										<Icon
											component={() => <i className='fal fa-sign-in-alt'></i>}
											style={{ verticalAlign: 0 }}
										/>
									}>
									Login
								</Button>
							</Link>
						</div>
					</Card>
				</Col>
			</Row>
		</Layout>
	)
}

export default Home
