from django.urls import path
from . import views

urlpatterns = [
    path('', views.QnaList.as_view()),
    path('<int:pk>/', views.QnaDetail.as_view()),
]