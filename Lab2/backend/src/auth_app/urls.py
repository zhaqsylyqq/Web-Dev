from django.urls import path, include
from .views import LoginView, logout

urlpatterns = [
    path('login/', LoginView.as_view(), name="login")
]
