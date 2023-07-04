from django.shortcuts import render
from rest_framework import generics
from rest_framework import status
from rest_framework.views import APIView
from django.http import Http404
from rest_framework.response import Response

from .models import Qna
from .serializers import QnaSerializer

class QnaList(APIView):
    def get(self, request):
        qnas = Qna.objects.all()
        
        serializer = QnaSerializer(qnas, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = QnaSerializer(
            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
    
class QnaDetail(APIView):
    def get_object(self, pk):
        try:
            return Qna.objects.get(pk=pk)
        except Qna.DoesNotExist:
            raise Http404
        
    def get(self, request, pk, format=None):
        qna = self.get_object(pk)
        serializer = QnaSerializer(qna)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        qna = self.get_object(pk)
        serializer = QnaSerializer(qna, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        qna = self.get_object(pk)
        qna.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)