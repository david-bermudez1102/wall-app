import React from "react"
import { Form, Button } from "antd"
import TextArea from "antd/lib/input/TextArea"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import Icon from "@ant-design/icons"
import { sendReply } from "../../../../../Actions/repliesActions"
import LoginOrSignupMessage from "../../../../Signup/LoginOrSignUpMessage"

const ReplyEditor = props => {
	const { messageId } = props
	const dispatch = useDispatch()
	const [form] = Form.useForm()
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)

	const onFinish = data => {
		dispatch(sendReply({ message_id: messageId, ...data }))
		form.resetFields()
	}

	if (!session.isLoggedIn)
		return (
			<LoginOrSignupMessage
				customMessage={"Login or signup to reply to this message"}
			/>
		)

	return (
		<Form
			form={form}
			onFinish={onFinish}
			name={`reply_editor_for_message_${messageId}`}>
			<Form.Item name={"content"}>
				<TextArea
					rows={2}
					autoSize={{ minRows: 2, maxRows: 5 }}
					placeholder={"Press enter to send comment."}
					onPressEnter={e => {
						e.preventDefault()
						return e.target.value === "" ? null : form.submit()
					}}
				/>
			</Form.Item>
			<Form.Item>
				<Button
					htmlType='submit'
					type='primary'
					icon={
						<Icon
							component={() => <i className={"fal fa-paper-plane"} />}
							style={{ margin: 0 }}
						/>
					}>
					Create comment
				</Button>
			</Form.Item>
		</Form>
	)
}

export default ReplyEditor
