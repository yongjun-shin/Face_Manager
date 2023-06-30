from django.db import models

# Create your models here.

class AiResult(models.Model):
    user_id = models.CharField(max_length=10, null=True)
    eye_len = models.CharField(max_length=30)
    eye_angle = models.CharField(max_length=30)
    lip_len = models.CharField(max_length=30)
    lip_thick = models.CharField(max_length=30)
    nostril = models.CharField(max_length=30)
    nose_len = models.CharField(max_length=30)
    face_shape = models.CharField(max_length=30)
    

    

