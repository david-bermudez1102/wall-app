import React, { useContext, useEffect } from "react"
import Messages from "./Messages"
import { Context } from "../../Store"
import { fethMessages } from "../../Actions/wallActions"

const Wall = props => {
	const [, dispatch] = useContext(Context)

	useEffect(() => {
		fethMessages()
			.then(messages => dispatch({ type: "SET_MESSAGES", messages }))
			.catch(console.log)
	}, [])

	return (
		<div>
			<Messages />
		</div>
	)
}

export default Wall
