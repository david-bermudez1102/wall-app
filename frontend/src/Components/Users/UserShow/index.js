import React from "react"
import { Row, Col, Card } from "antd"
import Title from "antd/lib/skeleton/Title"

const UserShow = () => {
	return (
		<Row justify={"center"} gutter={[16, 16]}>
			<Col xxl={10} xl={11} lg={12} md={18} sm={20} xs={24}>
				<Card
					size={"small"}
					bordered={false}
					title={<Title level={3}></Title>}></Card>
			</Col>
		</Row>
	)
}

export default UserShow
