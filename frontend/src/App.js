import React, { useEffect } from "react"
import "./App.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Components/Login"
import Wall from "./Components/Wall"
import SignUp from "./Components/Signup"
import { Layout } from "antd"
import Navbar from "./Components/Navbar"
import { useDispatch } from "react-redux"
import { fetchSession } from "./Actions/userActions"
const { Content, Footer } = Layout

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchSession())
	}, [])

	return (
		<Router>
			<Layout style={{ width: "100%", position: "relative" }}>
				<Navbar />
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
	)
}

export default App
