from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    confirmar_contrasena = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = ['id', 'username', 'email', 'nombre', 'apellido', 'fecha_nacimiento', 'biografia', 'password', 'confirmar_contrasena']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def validate(self, data):
        if data['password'] != data['confirmar_contrasena']:
            raise serializers.ValidationError("Las contraseñas no coinciden")
        return data

    def create(self, validated_data):
        validated_data.pop('confirmar_contrasena')
        usuario = Usuario.objects.create_user(**validated_data)
        return usuario