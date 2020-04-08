import React from 'react'
import axios from 'axios'

export default function calculator(props) {

    let apiURL = 'https://ussouthcentral.services.azureml.net/workspaces/05e3440cfa294d0983fa24c937ead5df/services/c1ca7e6267d54a50884ed9769be9d8c5/execute?api-version=2.0&details=true'
    let token = 'iMpv5m5DJ3RDMPeDYMhZ5jeI3l6dtXyxc+pBLWcgThW8hfnbiQEBeRaLr+ahjlHR+7vhOGl2Bj5pIPN5LgzlNw=='
    const body = 
    {
        "Inputs": {
          "input1": {
            "ColumnNames": [
              "standard_amount",
              "standard_goal",
              "donators",
              "days_active",
              "days_created",
              "has_beneficiary",
              "media_type",
              "project_type",
              "turn_off_donations",
              "visible_in_search",
              "campaign_hearts",
              "social_share_total",
              "is_charity"
            ],
            "Values": [
              [
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
              ],
              [
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
              ]
            ]
          }
        },
        "GlobalParameters": {}
    }

    const setAxiosToken = (token) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    }

    setAxiosToken(token)

    axios.post(apiURL,body)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log("axios error:", error)
    })
    

    return(
        <div className="divSize">test</div>
    )
}