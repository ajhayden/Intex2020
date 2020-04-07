import React from 'react'
import { Link} from 'react-router-dom'

//how do change an array you need to convert object.values
export default function Center(props) {
    return (
        <div className="divSize">
            <h3 className="text-primary pt-4 pb-4" style={{textAlign: 'center'}}>
                Search Campaigns
                <br />
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 200
                    }}>
                    <Link className="btn btn-primary mb-3" to='/searchCampaigns'>Search</Link>
                </div>
            </h3>
        </div>
    )
}