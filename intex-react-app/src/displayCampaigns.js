import React from 'react'
import AppContext from './context'
import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//how do change an array you need to convert object.values
export default function DisplayCampaigns(props) {
    const context = useContext(AppContext)
    let campaignValues = context.campaigns
    const query = context.query

    if(query.currentAmount !== "")
    {
        console.log('current_amount')
        let fullAmount = query.currentAmount.split('-')
        let minAmount = parseInt(fullAmount[0])
        let maxAmount = parseInt(fullAmount[1])
        campaignValues = campaignValues.filter(x => parseInt(x.current_amount) >= minAmount && parseInt(x.current_amount) <= maxAmount)
    }

    if(query.donators !== "")
    {
        console.log('donators')
        let fullDonators = query.donators.split('-')
        let minDonators = parseInt(fullDonators[0])
        let maxDonators = parseInt(fullDonators[1])
        campaignValues = campaignValues.filter(x => parseInt(x.donators) > minDonators && parseInt(x.donators) < maxDonators)
    }

    if(query.hasBeneficiary !== "")
    {
        console.log('beneficiary')
        if(query.hasBeneficiary === "TRUE" )
        {
            campaignValues = campaignValues.filter(x => x.has_beneficiary === "TRUE")
        }
        console.log('beneficiary')
        if(query.hasBeneficiary === "FALSE" )
        {
            campaignValues = campaignValues.filter(x => x.has_beneficiary === "FALSE")
        }
        
    }
    campaignValues = campaignValues.filter(x => x.title.includes(query.title))
    campaignValues = campaignValues.filter(x => x.category.includes(query.category))

    return (
        <div>
            <h3 className="text-primary pt-4 pb-4" style={{textAlign: 'center'}}>
                Display Campaigns
            </h3>
                <div>
                    <Table striped bordered hover variant="light" style={{color:'#40587c'}}>
                        <thead>
                            <tr>
                                <th>Title of Campaign</th>
                                <th>Current Amount</th>
                                <th>Goal</th>
                                <th>Donator Number</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaignValues.map((campaign) => {
                                return (
                                    <tr key={campaign.title + campaign.id}>
                                        <td>{campaign.title}</td>
                                        <td>${campaign.current_amount}</td>
                                        <td>${campaign.goal}</td>
                                        <td>{campaign.donators}</td>
                                        <td><Link className='btn btn-secondary btn-sm' to={`/campaignDetails/${campaign.id}`}>Details</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
            </div>
        </div>
    )
}