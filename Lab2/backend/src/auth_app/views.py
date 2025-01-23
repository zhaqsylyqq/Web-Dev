from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
# Create your views here.

from rest_framework.views import APIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token  
from rest_framework.permissions import AllowAny

from .serializers import LoginSerializer

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token = Token.generate_key()
            return Response({"token": token, "username": user.username})
        return Response(serializer.errors, status=401)


