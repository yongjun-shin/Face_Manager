from django.urls import include, path

urlpatterns = [
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/register/', include('dj_rest_auth.registration.urls'))
]

# from django.urls import path, include
# from . import views
# from rest_framework import urls

# urlpatterns =[
#     path('signup/', views.UserCreate.as_view()),
#     path('api-auth/', include('rest_framework.urls')),
#  ]