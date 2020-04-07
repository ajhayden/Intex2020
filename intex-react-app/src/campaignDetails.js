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
                        <h4>Location of campaign online:</h4>
                    </Col>
                    <Col>
                        <a href={campaign.url}> <h5> {campaign.url}</h5></a>
                    </Col>
                </Row>
                <hr />
                <h4>Description:</h4>
                <div style={{position: "relative"}}>{campaign.description}</div>
                <img src={campaign.campaign_image_url}/>
                <hr />
                <Row>
                    <Col>
                        <div>Name</div>
                    </Col>
                    <Col>
                        <div>{campaign.user_first_name}&nbsp;{campaign.user_last_name}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>Location City Started the Campaign</div>
                    </Col>
                    <Col>
                        <div>{campaign.location_city}&nbsp;{campaign.location_country},&nbsp;{campaign.location_zip}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>Updates are Automatically Posted to FaceBook</div>
                    </Col>
                    <Col>
                        <div>{campaign.collected_date}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>the name of the currency chosen by the creator</div>
                    </Col>
                    <Col>
                        <div>{campaign.currencycode}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>date the campaign was created</div>
                    </Col>
                    <Col>
                        <div>{campaign.created_at}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>date the campaign was launched</div>
                    </Col>
                    <Col>
                        <div>{campaign.launch_date}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>ID of category the campaign was posted under</div>
                    </Col>
                    <Col>
                        <div>{campaign.category_id}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>category name</div>
                    </Col>
                    <Col>
                        <div>{campaign.category}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>current level of money raised</div>
                    </Col>
                    <Col>
                        <div>{campaign.current_amount}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>goal of the individual or group who posted the campaign</div>
                    </Col>
                    <Col>
                        <div>{campaign.goal}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>number of people who have donated so far</div>
                    </Col>
                    <Col>
                        <div>{campaign.donators}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>days_active number of days since the campaign was publicly live</div>
                    </Col>
                    <Col>
                        <div>{campaign.days_active}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>number of days since the campaign was started in the system</div>
                    </Col>
                    <Col>
                        <div>{campaign.days_created}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>a shortened version of the URL</div>
                    </Col>
                    <Col>
                        <div>{campaign.default_url}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>???</div>
                    </Col>
                    <Col>
                        <div>{campaign.media_type}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>???</div>
                    </Col>
                    <Col>
                        <div>{campaign.project_type}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>donations have been paused</div>
                    </Col>
                    <Col>
                        <div>{campaign.turn_off_donations}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>true/false indicating whether this campaign is publicly visible in the search results</div>
                    </Col>
                    <Col>
                        <div>{campaign.visible_in_search}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>active true/false set by the user</div>
                    </Col>
                    <Col>
                        <div>{campaign.status}</div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div>deactivated true/false by GoFundMe</div>
                    </Col>
                    <Col>
                        <div>{campaign.deactivated}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>???</div>
                    </Col>
                    <Col>
                        <div>{campaign.state}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>true/false indicating whether the campaign has been launched</div>
                    </Col>
                    <Col>
                        <div>{campaign.is_launched}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>the number of people who have "liked" or "hearted" the campaign regardless of whether or not they have donated</div>
                    </Col>
                    <Col>
                        <div>{campaign.campaign_hearts}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>number of people who have shared the campaign on their social media accounts</div>
                    </Col>
                    <Col>
                        <div>{campaign.social_share_total}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>date of the last social media share</div>
                    </Col>
                    <Col>
                        <div>{campaign.social_share_last_update}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>true/false indicating whether the creator is a charitable organization (as opposed to an individual)</div>
                    </Col>
                    <Col>
                        <div>{campaign.is_charity}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>true/false indicating whether the charity has an npo ID</div>
                    </Col>
                    <Col>
                        <div>{campaign.charity_valid}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>the npo ID of the valid charity</div>
                    </Col>
                    <Col>
                        <div>{campaign.charity_npo_id}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>the name of the charity</div>
                    </Col>
                    <Col>
                        <div>{campaign.charity_name}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>???</div>
                    </Col>
                    <Col>
                        <div>{campaign.velocity}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}