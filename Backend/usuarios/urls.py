from django.urls import path
from . import views

urlpatterns = [
    path('registro/', views.registro, name='registro'),
    path('login/', views.login, name='login'),
    path('listar/', views.listar_usuarios, name='listar_usuarios'),
]