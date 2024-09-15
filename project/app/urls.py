from django.urls import path
from . import views
from .views import RegisterView, LoginView, get_user_status
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', views.home, name='home'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView, name='login'),
    path('user-status/', get_user_status, name='user-status'),
    path('app/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
