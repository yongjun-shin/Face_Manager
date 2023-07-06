from django.urls import path
from . import views

urlpatterns = [
    path('', views.AiResultList.as_view()),   
    path('getdata/', views.AiResultDetail.as_view()),  
    path('apply/', views.ApplyImageList.as_view()),
    path('apply/<int:pk>', views.ApplyImageDetail.as_view()), 
]

