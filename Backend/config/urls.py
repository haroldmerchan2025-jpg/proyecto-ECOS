"""
URL configuration for config project.
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='http://localhost:3000/', permanent=False)),
    path('admin/', admin.site.urls),
    path('api/usuarios/', include('usuarios.urls')),
]