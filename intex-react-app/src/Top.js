import React from 'react'
import './index.scss'
import { Dropdown } from 'react-bootstrap'
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
                        <Link to='/'>
                        <Navbar.Brand style={{fontSize: 25}} className="text-white">Campaign Analyzer</Navbar.Brand>
                        </Link>
                        <Navbar.Collapse id="basic-navbar-nav">

                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col md="1">
                    <Dropdown className="mt-2">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Welcome
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#">My Account</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Login</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>     
            </Row>
        </Container>
    )
}