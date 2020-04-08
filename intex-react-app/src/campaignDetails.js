import React from 'react'
import AppContext from './context'
import { useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


//how do change an array you need to convert object.values
export default function CampaignDetails(props) {
    let context = useContext(AppContext)
    let campaignValues = context.campaigns
    let match = useRouteMatch('/campaignDetails/:id')
    console.log(match)
    let campaignId = match.params.id
    let campaign = campaignValues.find(x => x.id === parseInt(campaignId))

    return (
        <div >
            <h3 className="text-primary pt-4 pb-4" style={{textAlign: 'center'}}>
                Campaign Details
            </h3>
            <Container className="primary">
                <Row>
                    <Col>
                        <h4>Title:</h4>
                    </Col>
                    <Col>
                        <h5>{campaign.title}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Location of Campaign Online:</h4>
                    </Col>
                    <Col>
                        <a href={campaign.url} target="_blank"> <h5> {campaign.url}</h5></a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h4>Description:</h4>
                    <p ><hr /><img style={{float:"right",width:340,height:340}} src={campaign.campaign_image_url}/>
                    <h5>{campaign.description}</h5></p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h6>Creators Name: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.user_first_name}&nbsp;{campaign.user_last_name}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>City: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.location_city}&nbsp;&nbsp;{campaign.location_country}&nbsp;{campaign.location_zip}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Currency Type: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.currencycode}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Creation Date: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.created_at}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Launched Date: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.launch_date}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Updates are Automatically Posted to FaceBook: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.collected_date}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Current Level of Money Raised: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.current_amount}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Monetary Goal:</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.goal}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Number of People Donated:</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.donators}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Days Since Publicly Live: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.days_active}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Days Since Created: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.days_created}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Media Type: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.media_type}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Project Type: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.project_type}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Donations Paused: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.turn_off_donations}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Publicly Visible: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.visible_in_search}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Current Status of Campaign: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.status}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Deactivated by GoFundMe: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.deactivated}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Current Status: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.state}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Campaign Launched: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.is_launched}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Social Media Likes Count: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.campaign_hearts}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Social Media Share Count: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.social_share_total}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Last Social Media Share: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.social_share_last_update}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Charitable Organization: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.is_charity}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Charity Validity: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.charity_valid}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Nonprofit ID: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.charity_npo_id}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Charity Name: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.charity_name}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Velocity: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.velocity}</h6>
                    </Col>
                </Row>
                <p></p>
            </Container>
        </div>
    )
}