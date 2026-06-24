from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UsuarioSerializer
from .models import Usuario

@api_view(['POST'])
def registro(request):
    serializer = UsuarioSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'mensaje': 'Usuario creado exitosamente'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    from django.contrib.auth import authenticate

    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    usuario = None

    # 1. Intentar con username
    if username:
        usuario = authenticate(username=username, password=password)

    # 2. Si falla, intentar con email
    if not usuario and email:
        try:
            user_obj = Usuario.objects.get(email=email)
            usuario = authenticate(username=user_obj.username, password=password)
        except Usuario.DoesNotExist:
            usuario = None

    if usuario:
        return Response({
            'mensaje': 'Login exitoso',
            'nombre': usuario.nombre,
            'email': usuario.email,
            'fecha_nacimiento': str(usuario.fecha_nacimiento),
            'is_staff': usuario.is_staff,
            'is_superuser': usuario.is_superuser,
        })

    return Response(
        {'error': 'Credenciales incorrectas'},
        status=status.HTTP_400_BAD_REQUEST
    )

@api_view(['GET'])
def listar_usuarios(request):
    usuarios = Usuario.objects.all()

    data = []
    for usuario in usuarios:
        data.append({
            'id': usuario.id,
            'nombre': usuario.nombre,
            'apellido': usuario.apellido,
            'email': usuario.email,
            'username': usuario.username,
        })

    return Response(data)