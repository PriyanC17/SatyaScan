from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt

# rest_framework: DRF modules to handle HTTP requests and responses.
# RefreshToken: Part of django-rest-framework-simplejwt used for handling JSON Web Tokens (JWT) for authentication.
# User: The default Django user model for user management.
# AllowAny: A DRF permission class allowing unrestricted access to views.
# authenticate: A Django utility function to authenticate users.


@api_view(['GET'])
def home(request):
    data = {"message": "Hello from Django!"}
    return Response(data)

# Register View
class RegisterView(APIView):
    permission_classes = [AllowAny]  # Anyone can access this view without authentication

    def post(self, request):    #Handles POST requests to register a new user
        username = request.data.get('username')      #Retrieves username, email, and password from the request payload.
        email = request.data.get('email')
        password = request.data.get('password')

        #  Checks if a user with the given username already exists.
        if User.objects.filter(username=username).exists():   
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

        # Creates a new user in the database.
        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()

        return Response({'success': 'User created successfully'}, status=status.HTTP_201_CREATED)

# login
@csrf_exempt
@api_view(['POST'])
def LoginView(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({"error": "Email and password are required"}, status=status.HTTP_400_BAD_REQUEST)

    user = authenticate(request, email=email, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh)
        }, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)