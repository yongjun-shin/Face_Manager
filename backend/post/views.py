# backend/post/views.py
from django.shortcuts import render
from rest_framework import generics

from .models import Post
from .serializers import PostSerializer

from rest_framework import status
from rest_framework.views import APIView
from .serializers import NameAgeSerializer
from rest_framework.response import Response
from .models import NameAge
from .serializers import ReviewSerializer
from .models import Review

from django.http import Http404

from .models import FaceInput
from .serializers import FaceInputSerializer

class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class NameAgeList(APIView):
    def get(self, request):
        nameages = NameAge.objects.all()
        
        serializer = NameAgeSerializer(nameages, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = NameAgeSerializer(
            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ReviewList(APIView):
    def get(self, request):
        reviews = Review.objects.all()
        
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ReviewSerializer(
            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
    
class ReviewDetail(APIView):
    def get_object(self, pk):
        try:
            return Review.objects.get(pk=pk)
        except Review.DoesNotExist:
            raise Http404
        
    def get(self, request, pk, format=None):
        review = self.get_object(pk)
        serializer = ReviewSerializer(review)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        review = self.get_object(pk)
        serializer = ReviewSerializer(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        review = self.get_object(pk)
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
class FaceInputList(APIView):
    def get(self, request):
        faceInputs = FaceInput.objects.all()
        
        serializer = FaceInputSerializer(faceInputs, many=True)
        return Response(serializer.data)
    
    def get_object(self, user_id):
        try:
            return Review.objects.get(user_id = user_id)
        except Review.DoesNotExist:
            raise Http404

    def post(self, request):
        serializer = FaceInputSerializer(
            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)