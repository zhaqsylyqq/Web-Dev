from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth.models import User  # Replace with CustomUser if used

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid credentials")
