from django.contrib import admin

from .models import AiResult
from .models import FaceShapeMethod
from .models import EyeMethod_eyelid
from .models import EyeMethod_len
from .models import EyeMethod_angle
from .models import LipMethod_len
from .models import LipMethod_thick
from .models import NoseMethod_nos
from .models import NoseMethod_len
from .models import MakeupText
from .models import ApplyImage

admin.site.register(AiResult)
admin.site.register(FaceShapeMethod)
admin.site.register(EyeMethod_eyelid)
admin.site.register(EyeMethod_len)
admin.site.register(EyeMethod_angle)
admin.site.register(LipMethod_len)
admin.site.register(LipMethod_thick)
admin.site.register(NoseMethod_len)
admin.site.register(MakeupText)
admin.site.register(ApplyImage)
