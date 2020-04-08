from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import Campaign
from api.serializers import CampaignSerializer

class CampaignList(APIView):
    '''Get all categories or create a Campaign'''
    @csrf_exempt  #localhost:8000/api/campaign
    def get(self, request, format=None):
        camp = Campaign.objects.all()
        serializer = CampaignSerializer(camp, many=True)
        return Response(serializer.data)

    @csrf_exempt  #localhost:8000/api/campaign/
    def post(self, request, format=None):
        serializer = CampaignSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CampaignDetail(APIView):
    '''Work with an individual Category object'''
    @csrf_exempt  #localhost:8000/api/category/1
    def get(self, request, pk, format=None):
        camp = Campaign.objects.get(id=pk)
        serializer = CampaignSerializer(camp)
        return Response(serializer.data)

    @csrf_exempt  #localhost:8000/api/category/1/
    def put(self, request, pk, format=None):
        camp = Campaign.objects.get(id=pk)
        serializer = CampaignSerializer(camp, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @csrf_exempt  #localhost:8000/api/category/8/
    def delete(self, request, pk, format=None):
        camp = Campaign.objects.get(id=pk)
        camp.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class Calculator(APIView):
    '''Get all categories or create a Campaign'''
    @csrf_exempt  #localhost:8000/api/campaign/
    def post(self, request, format=None):
        values = request.data
        standard_goal = values['standard_goal']
        days_active = values['days_active']
        days_created = values['days_created']
        has_beneficiary = values['has_beneficiary']
        media_type = values['media_type']
        project_type = values['project_type']
        turn_off_donations = values['turn_off_donations']
        visible_in_search = values['visible_in_search']
        campaign_hearts = values['campaign_hearts']
        social_share_total = values['social_share_total']
        is_charity = values['is_charity']

        import requests  
        url = "https://ussouthcentral.services.azureml.net/workspaces/05e3440cfa294d0983fa24c937ead5df/services/15c5b0bddce6468da3b2aaa538af1068/execute?api-version=2.0&details=true"
        # payload = '{\r\n  \"Inputs\": {\r\n    \"input1\": {\r\n      \"ColumnNames\": [\r\n        \"standard_amount\",\r\n        \"standard_goal\",\r\n        \"days_active\",\r\n        \"days_created\",\r\n        \"has_beneficiary\",\r\n        \"media_type\",\r\n        \"project_type\",\r\n        \"turn_off_donations\",\r\n        \"visible_in_search\",\r\n        \"campaign_hearts\",\r\n        \"social_share_total\",\r\n        \"is_charity\"\r\n      ],\r\n      \"Values\": [\r\n        [\r\n          \"0\",\r\n          \"'+ standard_goal +'\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\"\r\n        ],\r\n        [\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\"\r\n        ]\r\n      ]\r\n    }\r\n  },\r\n  \"GlobalParameters\": {}\r\n}'
        payload = '{\r\n  \"Inputs\": {\r\n    \"input1\": {\r\n      \"ColumnNames\": [\r\n        \"standard_amount\",\r\n        \"standard_goal\",\r\n        \"days_active\",\r\n        \"days_created\",\r\n        \"has_beneficiary\",\r\n        \"media_type\",\r\n        \"project_type\",\r\n        \"turn_off_donations\",\r\n        \"visible_in_search\",\r\n        \"campaign_hearts\",\r\n        \"social_share_total\",\r\n        \"is_charity\"\r\n      ],\r\n      \"Values\": [\r\n        [\r\n          \"0\",\r\n          \"'+ standard_goal +'\",\r\n          \"'+ days_active +'\",\r\n          \"'+ days_created +'\",\r\n          \"'+ has_beneficiary +'\",\r\n          \"'+ media_type +'\",\r\n          \"'+ project_type +'\",\r\n          \"'+ turn_off_donations +'\",\r\n          \"'+ visible_in_search +'\",\r\n          \"'+ campaign_hearts +'\",\r\n          \"'+ social_share_total +'\",\r\n          \"'+ is_charity +'\"\r\n        ],\r\n        [\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\",\r\n          \"0\"\r\n        ]\r\n      ]\r\n    }\r\n  },\r\n  \"GlobalParameters\": {}\r\n}'
        headers = {
        'Authorization': 'Bearer 4vCcd2JuQ0Kz9FirYK+nwE2712/LmdUfgPJKn4a+mQCB69wNT55joGV1MeWsD8mv2JszK13Q6sZIkQ7gr5mkoQ==',
        'Content-Type': 'application/json'
        }
        response = requests.request("POST", url, headers=headers, data = payload)
        print(response.text.encode('utf8'))
        return Response(response.text.encode('utf8'), status=status.HTTP_201_CREATED)

# Campaign Update
# class UpdateList(APIView):
#     '''Get all categories or create a Update'''
#     @csrf_exempt  #localhost:8000/api/Update
#     def get(self, request, format=None):
#         Up = Update.objects.all()
#         serializer = UpdateSerializer(Up, many=True)
#         return Response(serializer.data)

#     @csrf_exempt  #localhost:8000/api/Update/
#     def post(self, request, format=None):
#         serializer = UpdateSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class UpdateDetail(APIView):
#     '''Work with an individual Category object'''
#     @csrf_exempt  #localhost:8000/api/category/1
#     def get(self, request, pk, format=None):
#         Up = Update.objects.get(id=pk)
#         serializer = UpdateSerializer(Up)
#         return Response(serializer.data)

#     @csrf_exempt  #localhost:8000/api/category/1/
#     def put(self, request, pk, format=None):
#         Up = Update.objects.get(id=pk)
#         serializer = UpdateSerializer(Up, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     @csrf_exempt  #localhost:8000/api/category/8/
#     def delete(self, request, pk, format=None):
#         Up = Update.objects.get(id=pk)
#         Up.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

# Campaign Donation
# class DonationList(APIView):
#     '''Get all categories or create a donation'''
#     @csrf_exempt  #localhost:8000/api/donation
#     def get(self, request, format=None):
#         Don = Donation.objects.all()
#         serializer = DonationSerializer(camp, many=True)
#         return Response(serializer.data)

#     @csrf_exempt  #localhost:8000/api/donation/
#     def post(self, request, format=None):
#         serializer = DonationSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class DonationDetail(APIView):
#     '''Work with an individual Category object'''
#     @csrf_exempt  #localhost:8000/api/category/1
#     def get(self, request, pk, format=None):
#         Don = Donation.objects.get(id=pk)
#         serializer = DonationSerializer(Don)
#         return Response(serializer.data)

#     @csrf_exempt  #localhost:8000/api/category/1/
#     def put(self, request, pk, format=None):
#         Don = Donation.objects.get(id=pk)
#         serializer = DonationSerializer(Don, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     @csrf_exempt  #lDonationocalhost:8000/api/category/8/
#     def delete(self, request, pk, format=None):
#         Don = Donation.objects.get(id=pk)
#         Don.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)