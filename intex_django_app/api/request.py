import requests

url = "https://ussouthcentral.services.azureml.net/workspaces/05e3440cfa294d0983fa24c937ead5df/services/c1ca7e6267d54a50884ed9769be9d8c5/execute?api-version=2.0&details=true"

payload = "{\r\n  \"Inputs\": {\r\n    \"input1\": {\r\n      \"ColumnNames\": [\r\n        \"standard_amount\",\r\n        \"standard_goal\",\r\n        \"donators\",\r\n        \"days_active\",\r\n        \"days_created\",\r\n        \"has_beneficiary\",\r\n        \"media_type\",\r\n        \"project_type\",\r\n        \"turn_off_donations\",\r\n        \"visible_in_search\",\r\n        \"campaign_hearts\",\r\n        \"social_share_total\",\r\n        \"is_charity\"\r\n      ],\r\n      \"Values\": [\r\n        [\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\"\r\n        ],\r\n        [\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\"\r\n        ]\r\n      ]\r\n    }\r\n  },\r\n  \"GlobalParameters\": {}\r\n}"
headers = {
  'authorization': 'bearer iMpv5m5DJ3RDMPeDYMhZ5jeI3l6dtXyxc+pBLWcgThW8hfnbiQEBeRaLr+ahjlHR+7vhOGl2Bj5pIPN5LgzlNw==',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data = payload)

print(response.text.encode('utf8'))
