import React from 'react'


//how do change an array you need to convert object.values
export default function About(props) {
    return (
        <div className="divSize text-primary">
            <h3 className="text-primary pt-4 pb-4" style={{textAlign: 'center'}}>
                About Us
            </h3>
            <h4 className="text-primary">Our Team</h4>
            <p>We are a dedicated group of analysts, developers, and buisnessmen who are dedicated in helping GoFundMe and its clients to the best of our ability. We hope that this application will impact all that use it.</p>
            <h4 className="text-primary">Our Project</h4>
            <p>We can up with this project to help our company Go Fund Me as well as Go Fund Me's users. We hope that this application will help creators design better campaigns that are more likely to get more donors and higher value donations and help management and analysts search through campaigns and identify the highest and lowest "quality" campaigns.</p>
        </div>
    )
}