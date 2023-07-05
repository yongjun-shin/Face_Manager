from django.db import models

# Create your models here.


class AiResult(models.Model):
    user_id = models.CharField(max_length=10, null=True)
    eye_lid = models.TextField(null=True)
    eye_len = models.TextField()
    eye_angle = models.TextField()
    lip_len = models.TextField()
    lip_thick = models.TextField()
    nostril = models.TextField()
    nose_len = models.TextField()
    face_shape = models.TextField()


class MakeupText(models.Model):
    user_id = models.JSONField(null=True)
    eye_lid = models.JSONField(null=True)
    eye_len = models.JSONField()
    eye_angle = models.JSONField()
    lip_len = models.JSONField()
    lip_thick = models.JSONField()
    nostril = models.JSONField()
    nose_len = models.JSONField()
    face_shape = models.JSONField()


class FaceShapeMethod(models.Model):
    shape = models.CharField(max_length=10)
    eyebrow = models.TextField(null=True)
    blusher = models.TextField(null=True)
    shading = models.TextField(null=True)


class EyeMethod_eyelid(models.Model):
    eyelid = models.CharField(max_length=10)
    shadow = models.TextField()


class EyeMethod_len(models.Model):
    leng = models.CharField(max_length=10)
    shadow = models.TextField()
    eyeline = models.TextField()
    mascara = models.TextField()


class EyeMethod_angle(models.Model):
    angle = models.CharField(max_length=10)
    shadow = models.TextField()
    eyeline = models.TextField()
    mascara = models.TextField()


class LipMethod_len(models.Model):
    leng = models.CharField(max_length=10)
    lip = models.TextField()


class LipMethod_thick(models.Model):
    thickness = models.CharField(max_length=10)
    lip = models.TextField()


class NoseMethod_nos(models.Model):
    wideness = models.CharField(max_length=10)
    nose = models.TextField()


class NoseMethod_len(models.Model):
    leng = models.CharField(max_length=10)
    nose = models.TextField()
