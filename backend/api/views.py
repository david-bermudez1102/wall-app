from django.shortcuts import render
from django.http import HttpResponseRedirect
from rest_framework import viewsets, generics
from .serializers import MessageSerializer, UserSerializer, UserSerializerWithToken
from .models import Message
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all().order_by('-created')
    serializer_class = MessageSerializer
    http_method_names = ['get', 'post', 'patch', 'delete']
    permission_classes_by_action = {'list': [permissions.AllowAny] }

    def perform_create(self, serializer):
     serializer.save(author=self.request.user)
     return Response(serializer.data)
    
    def list(self, request, *args, **kwargs):
        return super(MessageViewSet, self).list(request, *args, **kwargs)


    def get_permissions(self):
        try:
            # return permission_classes depending on `action` 
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError: 
            # action is not set return default permission_classes
            return [permission() for permission in self.permission_classes]
    
class UserList(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        