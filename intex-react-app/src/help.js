import React from 'react'


//how do change an array you need to convert object.values
export default function Help(props) {
    return (
        <div className="text-primary divSize">
            <h3 className="text-primary pt-4 pb-4" style={{textAlign: 'center'}}>
                We are here to help
            </h3>
            <h4 className="text-primary">Basic Instructions:</h4>
            <p>When you first enter the website there are several things that you can do to analyze the campaigns recently submitted</p>
            <p><b>First,</b> you can enter the search campaign page which will let you search based off of several criterions such as title, category, and current amount. This will give you a selection of campaigns, which you can click on to give you further details about each campaign. On the details page you can see a title, description, link to the campaign, and several additional attributes for the campaign. There is also a fradulent and success score.</p>
            <p><b>Success Score</b> utilizes an algorithm which predicts how likely a campagin wll reach its goal. The algorithm calculates its score using campaign hearts, current amount, donators, social share total, and percent of goals to score each campaign</p>
            <p><b>Fradulent Score</b> utilizes an algorith which predicts how likely a campaign is fraudulent. This algorith calculates a score based off of varying metrics to determine if a campaign is fraudulent. For instance, which words are used in creating the title and description or if the campaign has a valid charity.</p>
            <p><b>Second,</b> you can visit the <b>Campaign Calculator</b> to predict the amount of money a given campaign is to make based off of certain criteria.</p>
        </div>
    )
}