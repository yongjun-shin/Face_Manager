from django.db import models

# Create your models here.

class Pricing(models.Model):
    date = models.CharField(max_length=20)
    pay_type = models.CharField(max_length=20)
    method = models.CharField(max_length=20)
    price = models.CharField(max_length=20)
    user_name = models.CharField(max_length=10)
    user_id = models.CharField(max_length=10)