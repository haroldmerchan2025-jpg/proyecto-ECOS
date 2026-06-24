from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario

@admin.register(Usuario)
class UsuarioAdmin(UserAdmin):
    list_display = ['username', 'email', 'nombre', 'apellido', 'fecha_nacimiento']
    
    fieldsets = UserAdmin.fieldsets + (
        ('Perfil ECOS', {
            'fields': ('nombre', 'apellido', 'fecha_nacimiento', 'biografia', 'foto_perfil')
        }),
    )