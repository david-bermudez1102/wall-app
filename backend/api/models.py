from django.db import models
from django.core.validators import MinLengthValidator
# Create your models here.
class Message(models.Model):
 user = models.ForeignKey('auth.user', on_delete=models.CASCADE)
 content = models.TextField(validators=[MinLengthValidator(3)])
 created = models.DateTimeField(auto_now_add=True)
 updated = models.DateTimeField(auto_now=True)

 def __str__(self):
  return self.content

