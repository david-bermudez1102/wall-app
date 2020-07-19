import React, { useEffect } from "react"
import "./App.scss"
import { Switch, Route, useLocation } from "react-router-dom"
import Login from "./Components/Login"
import Wall from "./Components/Wall"
import SignUp from "./Components/Signup"
import { Layout } from "antd"
import Navbar from "./Components/Navbar"
import { useDispatch } from "react-redux"
import { fetchSession } from "./Actions/userActions"
import Logout from "./Components/Logout"
const { Content, Footer } = Layout

function App() {
	const dispatch = useDispatch()
	const location = useLocation()

	useEffect(() => {
		dispatch(fetchSession())
		// eslint-disable-next-line
	}, [location.pathname])

	return (
		<Layout style={{ minHeight: "100%", width: "100%", position: "relative" }}>
			<Navbar />
			<Content
				style={{
					minHeight: "100%",
					padding: 16,
					position: "relative",
					width: "100%"
				}}>
				<Switch>
					<Route path={"/login"} component={Login} />
					<Route path={"/wall"} component={Wall} />
					<Route path={"/signup"} component={SignUp} />
					<Route path={"/logout"} component={Logout} />
				</Switch>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Wall App - Designed by David Bermudez
			</Footer>
		</Layout>
	)
}

export default App
