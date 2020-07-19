import React from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"
import UserShow from "./UserShow"

const Users = props => {
	const match = useRouteMatch()
	return (
		<Switch>
			<Route path={`${match.path}/users/:username`} component={UserShow} />
		</Switch>
	)
}

export default Users
