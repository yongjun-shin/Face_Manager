from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.ListPost.as_view()),
    path('exer/', views.NameAgeList.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
    
    path('review/', views.ReviewList.as_view()),
    path('review/<int:pk>', views.ReviewDetail.as_view()),

    path('faceinput/', views.FaceInputList.as_view()),
    #path('faceinput/<int:pk>', views.ReviewDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
