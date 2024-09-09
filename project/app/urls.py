from django.urls import path
from . import views
from .views import RegisterView, LoginView

urlpatterns = [
    path('', views.home, name='home'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView, name='login'),
]
