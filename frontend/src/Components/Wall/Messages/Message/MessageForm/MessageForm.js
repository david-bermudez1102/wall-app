import React, { useEffect } from "react"
import { Form, Button } from "antd"
import TextArea from "antd/lib/input/TextArea"
import { useDispatch } from "react-redux"
import { addMessage, updateMessage } from "../../../../../Actions/wallActions"
import { useForm } from "antd/lib/form/Form"

const MessageForm = ({ message }) => {
	const dispatch = useDispatch()
	const [form] = useForm()
	const onFinish = data => {
		if (!message) dispatch(addMessage(data)).then(() => form.resetFields())
		// if no message passed, post
		else dispatch(updateMessage({ id: message.id, ...data })) // else, patch
	}

	useEffect(() => {
		form.setFieldsValue(message)
	}, [message])

	return (
		<Form layout={"vertical"} onFinish={onFinish} form={form}>
			<Form.Item name={"content"}>
				<TextArea placeholder={"What would you like to post on the wall?"} />
			</Form.Item>
			<Form.Item>
				<Button htmlType={"submit"} block>
					{message ? "Update Post" : "Post"}
				</Button>
			</Form.Item>
		</Form>
	)
}

export default MessageForm
