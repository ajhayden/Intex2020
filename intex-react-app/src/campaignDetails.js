import React from 'react'
import AppContext from './context'
import { useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

//how do change an array you need to convert object.values
export default function CampaignDetails(props) {
    const context = useContext(AppContext)
    let campaignValues = context.campaigns
    let match = useRouteMatch('/campaignDetails/:id')
    let campaignId = match.params.id
    let campaign = campaignValues.find(x => x.id === parseInt(campaignId))
    return (
        <div style={{height: 470 }}>
            <h3 className="text-primary pt-4 pb-4" style={{textAlign: 'center'}}>
                Campaign Details
            </h3>
            <Container>
                <Row>
                    <Col>
                        <div>Title:</div>
                    </Col>
                    <Col>
                        <div>{campaign.title}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>URL</div>
                    </Col>
                    <Col>
                        <div>{campaign.url}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}