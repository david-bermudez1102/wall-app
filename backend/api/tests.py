from django.test import TestCase, RequestFactory
from rest_framework.test import APIClient

from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from .models import Message, Reply

# Create your tests here.
class MessageTest(TestCase):
    """ Test module for Message model """

    def setUp(self):
     self.factory = RequestFactory()
     self.user = User.objects.create(username='jacob', email='jacob@gmail.com')
     self.user.set_password("top_secret")
     self.user.save()
     
     self.message = Message(content='Hi everybody, I love wall app', user=self.user)
     self.message.save()
      
    def test_message_creation(self):
        self.assertEqual(Message.objects.count(), 1)

    def test_message_representation(self):
        self.assertEqual(self.message.content, str(self.message.content))

    def test_message_fails_if_content_not_valid(self):
        message = Message(content='cc', user=self.user)
        try:
            message.full_clean()
        except ValidationError as e:
            self.assertTrue('content' in e.message_dict)

class ReplyTest(TestCase):
    """ Test module for Reply model """

    def setUp(self):
     self.factory = RequestFactory()
     self.user = User.objects.create(username='jacob', email='jacob@gmail.com')
     self.user.set_password("top_secret")
     self.user.save()
     
     self.message = Message(content='Hi everybody, I love wall app', user=self.user)
     self.message.save()
     self.reply = Reply.objects.create(user=self.user, message=self.message, content="I know, me too!")
    def test_reply_creation(self):
        self.assertEqual(Reply.objects.count(), 1)

    def test_reply_representation(self):
        self.assertEqual(self.reply.content, str(self.reply.content))

    def test_reply_fails_if_content_not_valid(self):
        reply = Reply(content='cc', user=self.user)
        try:
            reply.full_clean()
        except ValidationError as e:
            self.assertTrue('content' in e.message_dict)


class ViewTestCase(TestCase):
    """Test suite for the api views."""

    def setUp(self):
        """Create John Doe User and log him in through JWT"""
        self.jon_doe = User.objects.create(username='jon_doe', email='jon_doe@jondoe.com')
        self.jon_doe.set_password("top_secret")
        self.jon_doe.save()
        self.jon_doe_client = APIClient()
        self.jon_doe_data = {'username': 'jon_doe', 'password': 'top_secret'}
        self.jon_doe_response = self.jon_doe_client.post("/api/token-auth/", self.jon_doe_data,  format="json")
        self.jon_doe_token = self.jon_doe_response.data["token"]
        self.jon_doe_client.credentials(HTTP_AUTHORIZATION='JWT ' + self.jon_doe_token)

        """Create Jane Doe User and log her in through JWT"""
        self.jane_doe = User.objects.create(username='jane_doe', email='janedoe@janedoe.com')
        self.jane_doe.set_password("top_secret")
        self.jane_doe.save()
        self.jane_doe_client = APIClient()
        self.jane_doe_resp = self.jane_doe_client.post("/api/token-auth/", {'username': 'jane_doe', 'password': 'top_secret'},  format="json")
        self.jane_doe_token = self.jane_doe_resp.data["token"]
        self.jane_doe_client.credentials(HTTP_AUTHORIZATION='JWT ' + self.jane_doe_token)      

    def test_api_can_create_a_message(self):
        """Test the api creates a message when user is logged in, and assigns it automatically."""
        message_data = {'content':'A test message'}
        response = self.jon_doe_client.post("/api/messages/", message_data, format="json")
        self.assertEqual(response.status_code, 201)

    def test_api_only_owner_can_update_message(self):
        """Test Only the content owner can edit the message."""
        Message.objects.create(user=self.jon_doe, content="I am the original content.")
        
        jane_doe_message_data = { 'content':'I wanna change you!' }
        invalid_response = self.jane_doe_client.patch("/api/messages/1/", jane_doe_message_data, format="json")
        valid_response = self.jon_doe_client.patch("/api/messages/1/", jane_doe_message_data, format="json")
        self.assertEqual(invalid_response.status_code, 403)
        self.assertEqual(valid_response.status_code, 200)

    def test_api_only_owner_can_delete_message(self):
        """Test Only the content owner can delete the message."""
        Message.objects.create(user=self.jon_doe, content="I am the original content.")

        invalid_response = self.jane_doe_client.delete("/api/messages/1/")
        valid_response = self.jon_doe_client.delete("/api/messages/1/")
        self.assertEqual(invalid_response.status_code, 403)
        self.assertEqual(valid_response.status_code, 204)

    def test_api_can_reply_message(self):
        """Test the api creates a reply automatically and assigns logged in user and current message automatically"""
        Message.objects.create(user=self.jon_doe, content="I am the original content.")
        
        reply_data = {'content':'Jane doe is now replying to you'}
        response = self.jane_doe_client.post("/api/messages/1/replies/", reply_data, format="json")
        self.assertEqual(response.status_code, 201)

    def test_api_only_owner_can_edit_reply(self):
        """Test the api only the owner of the reply is authorized to update their reply"""
        message = Message.objects.create(user=self.jon_doe, content="I am the original content.")
        Reply.objects.create(user=self.jane_doe, message=message, content="Jane doe is now replying to you.")
        new_reply_data = {'content':'I just edited this reply'}
        response = self.jane_doe_client.patch("/api/messages/1/replies/1/", new_reply_data, format="json")
        invalid_response = self.jon_doe_client.patch("/api/messages/1/replies/1/", {'content':'I want to edit you even tho I shouldnt'}, format="json")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(invalid_response.status_code, 403)

    def test_api_only_owner_can_delete_reply(self):
        """Test Only the content owner can delete the reply."""
        message = Message.objects.create(user=self.jon_doe, content="I am the original content.")
        Reply.objects.create(user=self.jane_doe, message=message, content="Jane doe is now replying to you.")
        invalid_response = self.jon_doe_client.delete("/api/messages/1/replies/1/")
        response = self.jane_doe_client.delete("/api/messages/1/replies/1/")
        self.assertEqual(invalid_response.status_code, 403)
        self.assertEqual(response.status_code, 204)
        

    
    
   