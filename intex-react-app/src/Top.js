import React from 'react'
import './index.scss'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export default function Top(props) {
    return (
        <Container>
            <Row>
                <Col md="11">
                    <Navbar expand="lg">
                        <img alt="gofundmelogo" style={{width: 50, paddingTop: 0, paddingBottom: 5, paddingRight: 8}} src={`${process.env.PUBLIC_URL}/finalGraph.png`} />
                        <Link to='/'>
                        <Navbar.Brand style={{fontSize: 25}}  className="text-white">
                            
                             Campaign Analyzer 
                        </Navbar.Brand>
                        </Link>
                        <Navbar.Collapse id="basic-navbar-nav">

                        </Navbar.Collapse>
                    </Navbar>
                </Col>   
            </Row>
        </Container>
    )
}