import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Top from './Top'
import Bottom from './Bottom'
import Center from './Center'
//import Right from './Right'
import Left from './Left'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.scss'
import SearchCampaigns from './searchCampaigns'
import About from './about'
import Help from './help'
import DisplayCampaigns from './displayCampaigns'
import CampaignDetails from './campaignDetails'
import Calculator from './calculator'

export default function App() {
    return (
        <Router>
            <Container fluid>
                <Row>
                    <Col style={{backgroundColor: '#222f42'}}>
                        <Top />
                    </Col>
                </Row>
                <Row>
                    <Col md="2" style={{backgroundColor: '#40587c'}}>
                        <Left />
                    </Col>
                    <Col md="10" style={{backgroundColor: '#EBEEED'}}>
                        <Switch>
                            <Route path="/" exact component={Center} />
                            <Route path="/searchCampaigns" exact component={SearchCampaigns} />
                            <Route path="/about" exact component={About} />
                            <Route path="/help" exact component={Help} />
                            <Route path="/displayCampaigns" component={DisplayCampaigns} />
                            <Route path="/campaignDetails/*" component={CampaignDetails} />
                            <Route path="/calculator" component={Calculator} />
                        </Switch>
                    </Col>
                </Row>
                <Row>
                    <Col  style={{backgroundColor: '#222f42'}}>
                        <Bottom />
                    </Col>
                </Row>
            </Container>
        </Router>
    )
}
