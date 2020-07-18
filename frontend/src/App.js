import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LoginForm from "./Components/Login/LoginForm/LoginForm"

function App() {
	return (
		<Router>
			<Switch>
				<Route path={"/login"} component={LoginForm} />
			</Switch>
		</Router>
	)
}

export default App
