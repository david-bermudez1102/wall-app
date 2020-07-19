import React from "react"
import Messages from "./Messages"
import MessageFormLayout from "./Messages/Message/MessageForm/MessageFormLayout"
import { Switch, Route, useRouteMatch } from "react-router-dom"
import MessageShow from "./Messages/Message/MessageShow"

const Wall = props => {
	const match = useRouteMatch()

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
