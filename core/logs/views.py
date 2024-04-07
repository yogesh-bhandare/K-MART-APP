from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import PhoneNumber, Language, UserType, User
from .serializers import *

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
