from django.urls import path
from logs.views import *

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('signin/', signin, name='signin'),
    path('signout/', signout, name='signout'),
    # path('delete/', deleteAC, name='deleteAC'),
    path('phone_number/', phone_number_input, name='phone_number_input'),
    path('language/', language_input, name='language_input'),
    path('user_type/', user_type_input, name='user_type_input'),
    path('user/', user_input, name='user_input'),
]
