import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Components/Login"
import Wall from "./Components/Wall"
import SignUp from "./Components/Signup"

function App() {
	return (
		<Router>
			<Switch>
				<Route path={"/login"} component={Login} />
				<Route path={"/wall"} component={Wall} />
				<Route path={"/signup"} component={SignUp} />
			</Switch>
		</Router>
	)
}

export default App
