from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import PhoneNumber, Language, UserType, User, Register
from .serializers import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

@csrf_exempt
def signup(request):
    if request.method == "POST":
        data = json.loads(request.body)
        full_name = data.get('full_name', '')
        username = data.get('phone_number', '')
        password = data.get('password', '')
        email = data.get('email', '')
        phonenumber = username
        
        first_name, _, last_name = full_name.partition(" ")  

        print(f"{full_name, password, email, username, phonenumber}")

        user = User.objects.filter(username=username)

        if user.exists():
            print("User Already Exists.")
            return JsonResponse({'status': 'error', 'message': 'User already exists.'}, status=400)
        else:
            user = User.objects.create(
                first_name=first_name,
                last_name=last_name,
                username=username,
                email=email
            )
        
            user.set_password(password)
            user.save()
            return JsonResponse({'status': 'success', 'message': 'Account created successfully'})

@csrf_exempt
def signin(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get('phonenumber', '')  
        password = data.get('password', '')

        print(f"{username, password}")

        if not User.objects.filter(username=username).exists():
            return JsonResponse({'status': 'error', 'message': 'User not registered'}, status=400)
        
        user = authenticate(username=username, password=password)

        if user is None:
            return JsonResponse({'status': 'error', 'message': 'Invalid password!'}, status=400)
        else:
            login(request, user)
            return JsonResponse({'status': 'success', 'message': 'User logged in successfully'}, status=200)

@csrf_exempt
def signout(request):
    logout(request)
    return JsonResponse({'status': 'success', 'message': 'User logged out successfully'}, status=200)

# @csrf_exempt
# def deleteAC(request):
#     print(f"{request} this is request")
#     return JsonResponse({'status': 'success', 'message': 'User deleted successfully'}, status=200)


@csrf_exempt
def phone_number_input(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        phone_number = data.get('phone_number', '')
        if phone_number:
            PhoneNumber.objects.create(number=phone_number)
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Phone number not provided'}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Only POST requests are allowed'}, status=405)

@csrf_exempt
def language_input(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        language = data.get('language', '')
        if language:
            Language.objects.create(name=language)
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Language not provided'}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Only POST requests are allowed'}, status=405)

@csrf_exempt
def user_type_input(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_type = data.get('user_type', '')
        if user_type:
            UserType.objects.create(type=user_type)
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'status': 'error', 'message': 'User type not provided'}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Only POST requests are allowed'}, status=405)

@csrf_exempt
def user_input(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username', '')
        phone_number_id = data.get('phone_number_id', '')
        language_id = data.get('language_id', '')
        user_type_id = data.get('user_type_id', '')
        if username and phone_number_id and language_id and user_type_id:
            user = User.objects.create(
                username=username,
                phone_number_id=phone_number_id,
                language_id=language_id,
                user_type_id=user_type_id
            )
            return JsonResponse({'status': 'success', 'user_id': user.id})
        else:
            return JsonResponse({'status': 'error', 'message': 'Incomplete data provided'}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Only POST requests are allowed'}, status=405)


