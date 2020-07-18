import React from "react"
import { Form, Button } from "antd"
import TextArea from "antd/lib/input/TextArea"
import { useDispatch } from "react-redux"
import { addMessage } from "../../../../../Actions/wallActions"
import { useForm } from "antd/lib/form/Form"

const MessageForm = () => {
	const dispatch = useDispatch()
	const [form] = useForm()
	const onFinish = data => {
		dispatch(addMessage(data)).then(() => form.resetFields())
	}

	return (
		<Form layout={"vertical"} onFinish={onFinish} form={form}>
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
