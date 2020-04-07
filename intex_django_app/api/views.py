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