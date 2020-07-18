import React, { useEffect } from "react"
import Messages from "./Messages"
import { fethMessages } from "../../Actions/wallActions"
import { useDispatch } from "react-redux"
import MessageFormLayout from "./Messages/Message/MessageForm/MessageFormLayout"

const Wall = props => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fethMessages())
	}, [])

	return (
		<div>
			<MessageFormLayout />
			<Messages />
		</div>
	)
}

export default Wall
