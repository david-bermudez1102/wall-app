import React from "react"
import { Form, Button } from "antd"
import TextArea from "antd/lib/input/TextArea"
import { useDispatch } from "react-redux"
import { addMessage } from "../../../../../Actions/wallActions"

const MessageForm = () => {
	const dispatch = useDispatch()
	const onFinish = data => {
		dispatch(addMessage(data))
	}

	return (
		<Form layout={"vertical"} onFinish={onFinish}>
			<Form.Item name={"content"}>
				<TextArea placeholder={"What would you like to post on the wall?"} />
			</Form.Item>
			<Form.Item>
				<Button htmlType={"submit"} block>
					Post
				</Button>
			</Form.Item>
		</Form>
	)
}

export default MessageForm
