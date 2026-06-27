from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UsuarioSerializer
from rest_framework.authtoken.models import Token
from .models import Usuario
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes

@api_view(['POST'])
@permission_classes([AllowAny])
def registro(request):
    serializer = UsuarioSerializer(data=request.data)
    if serializer.is_valid():
        usuario = serializer.save()
        token, created = Token.objects.get_or_create(user=usuario)
        return Response({
            'mensaje': 'Usuario creado exitosamente',
            'token': token.key,
            'id': usuario.id,
            'nombre': usuario.nombre,
            'apellido': usuario.apellido,
            'email': usuario.email,
            'is_staff': usuario.is_staff,
            'is_superuser': usuario.is_superuser,
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    from django.contrib.auth import authenticate

    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    usuario = None

    if username:
        usuario = authenticate(username=username, password=password)

    if not usuario and email:
        try:
            user_obj = Usuario.objects.get(email=email)
            usuario = authenticate(username=user_obj.username, password=password)
        except Usuario.DoesNotExist:
            usuario = None

    if usuario:
        token, created = Token.objects.get_or_create(user=usuario)
        return Response({
            'mensaje': 'Login exitoso',
            'token': token.key,
            'id': usuario.id,
            'nombre': usuario.nombre,
            'apellido': usuario.apellido,
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
@permission_classes([AllowAny])
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

@api_view(['POST'])
@permission_classes([AllowAny])
def solicitar_recuperacion(request):
    from django.core.mail import send_mail
    from django.contrib.auth.tokens import default_token_generator
    from django.utils.http import urlsafe_base64_encode
    from django.utils.encoding import force_bytes
    from django.conf import settings

    correo = request.data.get('correo')

    try:
        usuario = Usuario.objects.get(email=correo)
    except Usuario.DoesNotExist:
        return Response({'mensaje': 'Si el correo existe, recibirás un enlace.'}, status=status.HTTP_200_OK)

    uid = urlsafe_base64_encode(force_bytes(usuario.pk))
    token = default_token_generator.make_token(usuario)
    link = f"{settings.FRONTEND_URL}/restablecer/{uid}/{token}"

    send_mail(
        'Recuperar contraseña - ECOS',
        f'Haz clic en este enlace para restablecer tu contraseña: {link}',
        settings.DEFAULT_FROM_EMAIL,
        [correo],
        fail_silently=False,
    )

    return Response({'mensaje': 'Si el correo existe, recibirás un enlace.'}, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([AllowAny])
def restablecer_contrasena(request, uid, token):
    from django.contrib.auth.tokens import default_token_generator
    from django.utils.http import urlsafe_base64_decode
    from django.utils.encoding import force_str

    nueva_contrasena = request.data.get('nueva_contrasena')

    try:
        pk = force_str(urlsafe_base64_decode(uid))
        usuario = Usuario.objects.get(pk=pk)
    except Exception:
        return Response({'error': 'Enlace inválido'}, status=status.HTTP_400_BAD_REQUEST)

    if not default_token_generator.check_token(usuario, token):
        return Response({'error': 'Enlace expirado o inválido'}, status=status.HTTP_400_BAD_REQUEST)

    usuario.set_password(nueva_contrasena)
    usuario.save()

    return Response({'mensaje': 'Contraseña restablecida correctamente'}, status=status.HTTP_200_OK)