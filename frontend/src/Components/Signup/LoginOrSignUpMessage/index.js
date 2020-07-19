import React from "react"
import { Card, Button } from "antd"
import { Link } from "react-router-dom"

const LoginOrSignupMessage = ({ customMessage }) => {
	return (
		<Card.Meta
			title={
				<div style={{ textAlign: "center", width: "100%" }}>
					{customMessage || <>Login or Signup to post messages on the wall!</>}
				</div>
			}
			description={
				<div style={{ textAlign: "center", width: "100%" }}>
					<Link to={"/login"}>
						<Button size={"large"} style={{ marginRight: 16 }}>
							Login
						</Button>
					</Link>
					<Link to={"/signup"}>
						<Button size={"large"}>Signup</Button>
					</Link>
				</div>
			}
		/>
	)
}

export default LoginOrSignupMessage
