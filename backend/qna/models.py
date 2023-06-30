from django.db import models

# Create your models here.

class Qna(models.Model):
    user_id = models.CharField(max_length=10)
    user_name = models.CharField(max_length=20)
    title = models.CharField(max_length=50)
    content = models.TextField()