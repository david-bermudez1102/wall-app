from rest_framework import serializers
from rest_framework_jwt.settings import api_settings

from .models import Message, Reply
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']

class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'email', 'password', 'first_name', 'last_name')

class ReplySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    message_id = serializers.ReadOnlyField(source='message.id', read_only=True)

    class Meta:
        model = Reply
        fields = ('id','user', 'message_id', 'content', 'created', 'updated')

class MessageSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    replies = ReplySerializer(source="reply_set", many=True, required=False)
    
    class Meta:
        model = Message
        fields = ('id','user', 'content', 'replies', 'created', 'updated')