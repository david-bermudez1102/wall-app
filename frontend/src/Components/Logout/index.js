import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { handleLogout } from "../../Actions/userActions"
import { useEffect } from "react"

const Logout = () => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)
	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		if (session.isLoggedIn)
			dispatch(handleLogout()).then(() => history.push("/"))
		else history.push("/")
	}, [])

	return null
}

export default Logout
