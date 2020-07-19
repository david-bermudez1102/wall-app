import React from "react"
import { useSelector, shallowEqual } from "react-redux"
import { AppstoreOutlined } from "@ant-design/icons"

const useLinks = () => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)
	const { isLoggedIn } = session
	const links = [
		{ to: "/wall", label: "Wall", icon: <AppstoreOutlined /> },
		!isLoggedIn && { to: "/login", label: "Login" },
		!isLoggedIn && { to: "/signup", label: "Signup" },
		isLoggedIn && { to: "/logout", label: "Logout" }
	].filter(link => link)

	return links
}

export default useLinks
