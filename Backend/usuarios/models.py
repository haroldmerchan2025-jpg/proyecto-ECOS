from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    biografia = models.TextField(blank=True)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='usuario_set',
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='usuario_set',
        blank=True
    )

    REQUIRED_FIELDS = ['email', 'nombre', 'apellido', 'fecha_nacimiento']

    def __str__(self):
        return self.username