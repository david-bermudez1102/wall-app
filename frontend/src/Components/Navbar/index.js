import React from "react"
import { Layout, Menu } from "antd"
import { Link, useLocation } from "react-router-dom"
import useLinks from "./Hooks/useLinks"
const { Header } = Layout

const Navbar = () => {
	const location = useLocation()
	const links = useLinks()
	return (
		<Header>
			<Menu theme='dark' mode='horizontal' selectedKeys={[location.pathname]}>
				{links.map(link => (
					<Menu.Item key={link.to}>
						<Link to={link.to}>{link.label}</Link>
					</Menu.Item>
				))}
			</Menu>
		</Header>
	)
}

export default Navbar
