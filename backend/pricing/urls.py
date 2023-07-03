from django.urls import path
from . import views

urlpatterns = [
    path('', views.PricingList.as_view()),
    path('<int:pk>/', views.PricingDetail.as_view()),
]
