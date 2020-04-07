import React from 'react'
import { Link} from 'react-router-dom'
import { Nav } from 'react-bootstrap'

//Side bar for recents. Not using yet.
export default function Left(props) {
    return (
        <div>
            <Nav className="flex-column">
                <h5 className="text-white m-3">&nbsp; Menu</h5>
                <Link className="nav-link text-white" to='/'>Home</Link>
                <Link className="nav-link text-white" to='/searchCampaigns'>Search Campaigns</Link>
                <Link className="nav-link text-white" to='/calculator'>Calculator</Link>
                <Link className="nav-link text-white" to='/about'>About</Link>
                <Link className="nav-link text-white" to='/help'>Help</Link>
            </Nav>

        </div>
        
    )
}