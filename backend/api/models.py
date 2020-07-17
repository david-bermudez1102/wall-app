from django.db import models

# Create your models here.
class Message(models.Model):
 author = models.ForeignKey('auth.user', on_delete=models.CASCADE)
 content = models.TextField()
 created = models.DateTimeField(auto_now_add=True)
 updated = models.DateTimeField(auto_now=True)

 def __str__(self):
  return self.content

