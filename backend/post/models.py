from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200) # title 컬럼
    content = models.TextField()             # content 컬럼

    def __str__(self):
        """A string representation of the model."""
        return self.title
    
class NameAge(models.Model):
    name = models.CharField(max_length=10)
    age = models.CharField(max_length=10)

# It works properly
# class Review(models.Model):
#     title = models.CharField(max_length=50)
#     content = models.TextField()

class Review(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()

class FaceInput(models.Model):
    do = models.CharField(max_length=20)
    sr = models.CharField(max_length=20)
    pn = models.CharField(max_length=20)
    wt = models.CharField(max_length=20)
    type_list = models.CharField(max_length=20, null=True)
    image = models.ImageField(upload_to='media/post_images', null=True)
    user_id = models.CharField(max_length=10, null=True)

