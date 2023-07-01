from django.urls import path
from . import views

urlpatterns = [
    path('', views.AiResultList.as_view()),   
]

