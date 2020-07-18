import { useSelector, shallowEqual } from "react-redux"

const useLinks = () => {
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)
	const { isLoggedIn } = session
	const links = [
		{ to: "/wall", label: "Wall" },
		!isLoggedIn && { to: "/login", label: "Login" },
		!isLoggedIn && { to: "/signup", label: "Signup" },
		isLoggedIn && { to: "/logout", label: "Logout" }
	].filter(link => link)

	return links
}

export default useLinks
