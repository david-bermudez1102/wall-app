import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { handleLogout } from "../../Actions/userActions"
import { useEffect } from "react"
import { message } from "antd"

const Logout = () => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)
	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		if (session.isLoggedIn)
			dispatch(handleLogout())
				.then(() => history.push("/"))
				.then(() => message.success("You've succesfully logged out."))
		else history.push("/")
		// eslint-disable-next-line
	}, [])

	return null
}

export default Logout
