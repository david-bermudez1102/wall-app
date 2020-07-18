import React from "react"
import { Layout, Menu } from "antd"
import { Link, useLocation } from "react-router-dom"
const { Header } = Layout

const Navbar = () => {
	const location = useLocation()
	return (
		<Header>
			<Menu theme='dark' mode='horizontal' selectedKeys={[location.pathname]}>
				<Menu.Item key='/login'>
					<Link to={"/login"}>Login</Link>
				</Menu.Item>
				<Menu.Item key='/signup'>
					<Link to={"/signup"}>Signup</Link>
				</Menu.Item>
				<Menu.Item key='/wall'>
					<Link to={"/wall"}>Wall</Link>
				</Menu.Item>
			</Menu>
		</Header>
	)
}

export default Navbar
