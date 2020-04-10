import React from 'react'
import AppContext from './context'
import { useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { ProgressBar } from 'react-bootstrap'

//how do change an array you need to convert object.values
export default function CampaignDetails(props) {
    let context = useContext(AppContext)
    let campaignValues = context.campaigns
    let match = useRouteMatch('/campaignDetails/:id')
    let campaignId = match.params.id
    let campaign = campaignValues.find(x => x.id === parseInt(campaignId))
    let nowFraud = 5
    let nowSuccess = 15

    if(campaign.location_country === "")
    {
        nowFraud = nowFraud + 5
    }
    if(campaign.deactivated === "TRUE")
    {
        nowFraud = nowFraud + 40
    }
    if(campaign.is_charity === "TRUE" && campaign.charity_valid === "FALSE")
    {
        nowFraud = nowFraud + 40
    }
    if(campaign.title.includes("corona") === true && campaign.user_last_name.includes("Corona") === false)
    {
        nowFraud = nowFraud + 10
    }
    if(campaign.charity_valid === "TRUE")
    {
        nowFraud = nowFraud - 15
    }
    if(campaign.goal > 99000)
    {
        nowFraud = nowFraud + 50
    }
    //Bad ones
    if(campaign.description.includes("rich") === true)
    {
        nowFraud = nowFraud + 3
    }
    if(campaign.description.includes("I want") === true)
    {
        nowFraud = nowFraud + 1
    }
    if(campaign.description.includes("give me") === true)
    {
        nowFraud = nowFraud + 3
    }
    if(campaign.description.includes("stupid") === true)
    {
        nowFraud = nowFraud + 3
    }
    if(campaign.description.includes("idiot") === true)
    {
        nowFraud = nowFraud + 3
    }
    if(campaign.description.includes("beer") === true)
    {
        nowFraud = nowFraud + 3
    }
    if(campaign.description.includes("covid19") === true)
    {
        nowFraud = nowFraud + 1
    }
    if(campaign.description.includes("Trump") === true)
    {
        nowFraud = nowFraud + 1
    }
    if(campaign.description.includes("trash") === true)
    {
        nowFraud = nowFraud + 1
    }
    if(campaign.description.includes("millionare") === true)
    {
        nowFraud = nowFraud + 1
    }
    if(campaign.description.includes("toilet") === true)
    {
        nowFraud = nowFraud + 3
    }
    if(campaign.description.includes("I need help") === true)
    {
        nowFraud = nowFraud + 1
    }
    if(campaign.description.includes("sucks") === true)
    {
        nowFraud = nowFraud + 1
    }
    if(campaign.description.includes("I need money") === true)
    {
        nowFraud = nowFraud + 1
    }
    //Good Ones
    if(campaign.description.includes("COVID-19") === true)
    {
        nowFraud = nowFraud - 1
    }
    if(campaign.description.includes("health professionals") === true)
    {
        nowFraud = nowFraud - 1
    }
    if(campaign.description.includes("humanitarian") === true)
    {
        nowFraud = nowFraud - 1
    }
    const progressInstance = <ProgressBar variant="danger" animated now={nowFraud} label={`${nowFraud}%`} />

    if(parseInt(campaign.campaign_hearts) > 40)
    {
        nowSuccess = nowSuccess + 15
    }
    if(parseInt(campaign.current_amount) > 2083)
    {
        nowSuccess = nowSuccess + 15
    }
    if(parseInt(campaign.donators) > 40)
    {
        nowSuccess = nowSuccess + 15
    }
    if(parseInt(campaign.social_share_total) > 148)
    {
        nowSuccess = nowSuccess + 15
    }
    if(parseInt((campaign.current_amount/campaign.goal) > 50))
    {
        nowSuccess = nowSuccess + 25
    }
    const progressInstance2 = <ProgressBar variant="success" animated now={nowSuccess} label={`${nowSuccess}%`} />

    

    return (
        <div className="text-primary pt-4 pb-4">
            <Container className="primary">
            <h3 style={{textAlign: 'center'}}>
                Campaign Details
            </h3>
            <br />
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
                        <h4>Success Score:</h4>
                        {progressInstance2}
                        <sub>predicts how likely a campagin wll reach its goal</sub>
                        <br/>
                    </Col>
                    <Col>
                        <h4>Fraudulent Score:</h4>
                        {progressInstance}
                        <sub>predicts how likely a campaign is fraudulent</sub>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                        <h6>Location of Campaign Online:</h6>
                    </Col>
                    <Col>
                        <br />
                        <a href={campaign.url} target="_blank" rel="noopener noreferrer"> <h6> {campaign.url}</h6></a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h5>Description:</h5>
                    <hr /><img alt="gofundmeimage" style={{float:"right",width:340,height:340}} src={campaign.campaign_image_url} />
                    <h6>{campaign.description}</h6>
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
                <br />
                <Row>
                    <Col>
                        <h6>City: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.location_city}&nbsp;&nbsp;{campaign.location_country}&nbsp;{campaign.location_zip}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Currency Type: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.currencycode}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Creation Date: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.created_at}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Launched Date: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.launch_date}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Updates are Automatically Posted to FaceBook: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.collected_date}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Current Level of Money Raised: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.current_amount}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Monetary Goal:</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.goal}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Number of People Donated:</h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.donators}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Days Since Publicly Live: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.days_active}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Days Since Created: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.days_created}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Media Type: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.media_type}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Project Type: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.project_type}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Donations Paused: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.turn_off_donations}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Publicly Visible: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.visible_in_search}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Current Status of Campaign: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.status}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Deactivated by GoFundMe: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.deactivated}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Current Status: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.state.toUpperCase()}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Campaign Launched: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.is_launched}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Social Media Likes Count: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.campaign_hearts}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Social Media Share Count: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.social_share_total}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Last Social Media Share: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.social_share_last_update}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Charitable Organization: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.is_charity}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Charity Validity: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.charity_valid}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Nonprofit ID: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.charity_npo_id}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Charity Name: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.charity_name}</h6>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h6>Velocity: </h6>
                    </Col>
                    <Col>
                        <h6 style={{float:"right"}}>{campaign.velocity}</h6>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}