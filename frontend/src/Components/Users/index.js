import React, { useEffect } from "react"
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom"
import UserShow from "./UserShow"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { fetchUsers } from "../../Actions/userActions"

const Users = props => {
	const match = useRouteMatch()
	const location = useLocation()
	const dispatch = useDispatch()
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)

	useEffect(() => {
		if (session.isLoggedIn) dispatch(fetchUsers())
	}, [location.pathname, session])

	console.log(match.path)
	return (
		<Switch>
			<Route path={`${match.path}/:username`} component={UserShow} />
		</Switch>
	)
}

export default Users
