from django.contrib import admin

from .models import Post
from .models import NameAge
from .models import Review
from .models import FaceInput

admin.site.register(Post)
admin.site.register(NameAge)
admin.site.register(Review)
admin.site.register(FaceInput)
