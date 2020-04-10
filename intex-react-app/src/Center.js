import React from 'react'
import { Link} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


export default function Center(props) {

    return (
        <div className="divSize">
            <h2 className="text-primary pt-4 pb-4" style={{textAlign: 'center'}}>
                Campaign Analyzer
            </h2>
            <Container>
                <Row>
                    <Col>
                    <br/>
                        <Row className='mt-5'>
                            <Col></Col>
                            <Col md='7'>
                                <div className=" text-primary"><i>The greatest value of a picture is when it forces us to notice what we never expected to see.</i></div>
                                <sub className="text-center text-primary">John Tukey</sub>
                            </Col>
                            <Col></Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className="text-center">
                                    <Link className="btn btn-primary mb-3" to='/searchCampaigns'>Search</Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img alt="gofundmelogo" style={{width: 350}} src={`${process.env.PUBLIC_URL}/graph7.png`} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}