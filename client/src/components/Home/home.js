import { Col, Row } from 'antd'
import React from 'react'
import LeftBody from '../Body/Body1'
import RightBody from '../Body/Body2'
import Header from '../Header/header'
import SubHeader from '../SubHeader/subheader'

const Home = () => {
    return (
        <div>
            <SubHeader/>
            <Header/>
            <Row>
                <Col span={18}>
                    <LeftBody/>
                </Col>
                <Col span={6} style={{maxHeight:'800px',overflow:'auto'}}>
                    <RightBody/>
                </Col>
            </Row>
        </div>
    )
}

export default Home;
