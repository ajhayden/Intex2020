from api import views
from django.urls import path


urlpatterns = [
    path('campaign/', views.CampaignList.as_view()),
    path('campaign/<int:pk>/', views.CampaignDetail.as_view()),
    path('calculator/', views.Calculator.as_view())
    # path('donation/', views.CampaignList.as_view()),
    # path('donation/<int:pk>/', views.CampaignDetail.as_view()),
    # path('update/', views.CampaignList.as_view()),
    # path('update/<int:pk>/', views.CampaignDetail.as_view()),
]