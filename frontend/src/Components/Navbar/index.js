import React from "react"
import { Layout, Menu, Avatar } from "antd"
import { Link, useLocation } from "react-router-dom"
import useLinks from "./Hooks/useLinks"
import { useSelector, shallowEqual } from "react-redux"
import { UserOutlined } from "@ant-design/icons"
const { Header } = Layout

const Navbar = () => {
	const location = useLocation()
	const links = useLinks()
	const { session } = useSelector(({ session }) => ({ session }), shallowEqual)
	const { currentUser } = session
	const { first_name } = currentUser || {}
	return (
		<Header>
			<Menu theme='dark' mode='horizontal' selectedKeys={[location.pathname]}>
				{links.map(link => (
					<Menu.Item key={link.to}>
						<Link to={link.to}>{link.label}</Link>
					</Menu.Item>
				))}
				<Menu.Item key={0} style={{ float: "right" }}>
					<Avatar icon={<UserOutlined />} style={{ marginRight: 10 }} />
					{currentUser ? <>Welcome {first_name}</> : <>Welcome, anonymous</>}
				</Menu.Item>
			</Menu>
		</Header>
	)
}

export default Navbar
