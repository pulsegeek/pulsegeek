from django.urls import path
from .views import cadastrar_usuario

urlpatterns = [
    path('login/', cadastrar_usuario, name='pag-cadastro'),
]
