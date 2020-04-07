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
                        <a href={campaign.url}> <h5> {campaign.url}</h5></a>
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
                        <h6>Name</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.user_first_name}&nbsp;{campaign.user_last_name}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Location City Started the Campaign</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.location_city}&nbsp;&nbsp;{campaign.location_country}&nbsp;{campaign.location_zip}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Currency</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.currencycode}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Created Date</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.created_at}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Launched Date</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.launch_date}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Updates are Automatically Posted to FaceBook</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.collected_date}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Current Level of Money Raised</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.current_amount}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Goal of the Indivdual or Group Who Posted the Campaign</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.goal}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>Number of People Who Have Donated</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.donators}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>days_active number of days since the campaign was publicly live</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.days_active}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>number of days since the campaign was started in the system</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.days_created}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>???</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.media_type}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>???</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.project_type}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>donations have been paused</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.turn_off_donations}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>true/false indicating whether this campaign is publicly visible in the search results</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.visible_in_search}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>active true/false set by the user</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.status}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>deactivated true/false by GoFundMe</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.deactivated}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>???</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.state}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>true/false indicating whether the campaign has been launched</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.is_launched}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>the number of people who have "liked" or "hearted" the campaign regardless of whether or not they have donated</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.campaign_hearts}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>number of people who have shared the campaign on their social media accounts</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.social_share_total}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>date of the last social media share</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.social_share_last_update}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>true/false indicating whether the creator is a charitable organization (as opposed to an inh6idual)</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.is_charity}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>true/false indicating whether the charity has an npo ID</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.charity_valid}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>the npo ID of the valid charity</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.charity_npo_id}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>the name of the charity</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.charity_name}</h6>
                    </Col>
                </Row>
                <p></p>
                <Row>
                    <Col>
                        <h6>???</h6>
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