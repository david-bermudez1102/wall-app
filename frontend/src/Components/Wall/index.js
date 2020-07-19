import React, { useEffect } from "react"
import Messages from "./Messages"
import { fethMessages } from "../../Actions/wallActions"
import { useDispatch } from "react-redux"
import MessageFormLayout from "./Messages/Message/MessageForm/MessageFormLayout"
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom"
import MessageShow from "./Messages/Message/MessageShow"

const Wall = props => {
	const dispatch = useDispatch()
	const match = useRouteMatch()
	const location = useLocation()

	useEffect(() => {
		dispatch(fethMessages())
		// eslint-disable-next-line
	}, [location.pathname])

	return (
		<div>
			<MessageFormLayout />
			<Messages />
			<Switch>
				<Route
					path={`${match.path}/messages/:messageId`}
					component={MessageShow}
				/>
			</Switch>
		</div>
	)
}

export default Wall
