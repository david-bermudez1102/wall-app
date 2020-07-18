import React from "react"
import "./App.scss"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from "./Components/Login"
import Wall from "./Components/Wall"
import SignUp from "./Components/Signup"
import Store from "./Store"
import { Layout, Menu } from "antd"
const { Header, Content, Footer } = Layout

function App() {
	return (
		<Store>
			<Router>
				<Layout style={{ width: "100%", position: "relative" }}>
					<Header>
						<Menu theme='dark' mode='horizontal' defaultSelectedKeys={["2"]}>
							<Menu.Item key='/login'>
								<Link to={"/login"}>Login</Link>
							</Menu.Item>
							<Menu.Item key='signup'>
								<Link to={"/signup"}>Signup</Link>
							</Menu.Item>
							<Menu.Item key='wall'>
								<Link to={"/wall"}>Wall</Link>
							</Menu.Item>
						</Menu>
					</Header>
					<Content
						style={{
							padding: 16,
							position: "relative",
							width: "100%"
						}}>
						<Switch>
							<Route path={"/login"} component={Login} />
							<Route path={"/wall"} component={Wall} />
							<Route path={"/signup"} component={SignUp} />
						</Switch>
					</Content>
					<Footer style={{ textAlign: "center" }}>
						Wall App - Designed by David Bermudez
					</Footer>
				</Layout>
			</Router>
		</Store>
	)
}

export default App
