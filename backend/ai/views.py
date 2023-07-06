from django.shortcuts import render
from rest_framework import generics

from .models import AiResult
from .serializers import AiResultSerializer
from .models import FaceShapeMethod
from .models import EyeMethod_eyelid
from .models import EyeMethod_len
from .models import EyeMethod_angle
from .models import LipMethod_len
from .models import LipMethod_thick
from .models import NoseMethod_nos
from .models import NoseMethod_len
from .models import MakeupText
from .serializers import MakeupTextSerializer

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

import cv2, dlib, math
import numpy as np
from post.models import FaceInput

import tensorflow as tf
from PIL import ImageFile
import numpy as np
import tensorflow as tf
from tensorflow.keras.layers import (
    Dropout,
    Dense,
    GlobalAveragePooling2D,
    BatchNormalization,
    Flatten,
)
from tensorflow.keras.applications import EfficientNetB6
from tensorflow.keras.models import Sequential
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from datetime import datetime
import os
import shutil

from .models import ApplyImage
from .serializers import ApplyImageSerializer

class ApplyImageList(APIView):
    def get(self, request):
        applies = ApplyImage.objects.all()
        
        serializer = ApplyImageSerializer(applies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ApplyImageSerializer(
            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class ApplyImageDetail(APIView):
    def get_object(self, pk):
        try:
            print(ApplyImage.objects.get(user_id=pk))
            return ApplyImage.objects.get(user_id=pk)
        except ApplyImage.DoesNotExist:
            raise Http404
        
    def get(self, request, pk, format=None):
        applies = self.get_object(pk)
        serializer = ApplyImageSerializer(applies)
        return Response(serializer.data)


class AiResultDetail(APIView):
    def get(self, request):
        airesults = AiResult.objects.all()
        serializer = AiResultSerializer(airesults, many=True)
        return Response(serializer.data)

    def put(self, request):
        data = request.data
        id = data["user_id"]
        query = AiResult.objects.filter(user_id=id).values()
        query = query[len(query) - 1]
        print(query)

        query2 = FaceInput.objects.filter(user_id=id).values()
        query2 = query2[len(query2) - 1]
        print(query2)
        img_path = query2["image"]

        eye_lid = query["eye_lid"]
        eye_len = query["eye_len"]
        eye_angle = query["eye_angle"]
        lip_len = query["lip_len"]
        lip_thick = query["lip_thick"]
        nostril = query["nostril"]
        nose_len = query["nose_len"]
        face_shape = query["face_shape"]

        q_face = FaceShapeMethod.objects.filter(shape=face_shape).values()[0]
        # print(q_face)
        q_eyelid = EyeMethod_eyelid.objects.filter(eyelid=eye_lid).values()[0]
        # print(q_eyelid)
        q_eyelen = EyeMethod_len.objects.filter(leng=eye_len).values()[0]
        # print(q_eyelen)
        q_eyeangle = EyeMethod_angle.objects.filter(angle=eye_angle).values()[0]
        # print(q_eyeangle)
        q_liplen = LipMethod_len.objects.filter(leng=lip_len).values()[0]
        # print(q_liplen)
        q_lipthick = LipMethod_thick.objects.filter(thickness=lip_thick).values()[0]
        # print(q_lipthick)
        q_nosenos = NoseMethod_nos.objects.filter(wideness=nostril).values()[0]
        # print(q_nosenos)
        q_noselen = NoseMethod_len.objects.filter(leng=nose_len).values()[0]
        # print(q_noselen)

        result_data = MakeupText(
            user_id=id,
            eye_lid=q_eyelid,
            eye_len=q_eyelen,
            eye_angle=q_eyeangle,
            lip_len=q_liplen,
            lip_thick=q_lipthick,
            nostril=q_nosenos,
            nose_len=q_noselen,
            face_shape=q_face,
        )
        result_data = MakeupTextSerializer(result_data)
        
        return Response(data = result_data.data, status=status.HTTP_201_CREATED)
        
        
class AiResultList(APIView):
    def get(self, request):
        airesults = AiResult.objects.all()
        serializer = AiResultSerializer(airesults, many=True)
        return Response(serializer.data)

    def post(self, request):
        print()
        data = request.data
        # print(data)
        # image = data['image']
        id = data["user_id"]

        # print(data['do'])
        # print(image)

        query = FaceInput.objects.filter(user_id=id).values()
        query = query[len(query) - 1]
        print(query)

        img_path = query["image"]
        # print(img_path)
        img = cv2.imread(img_path)

        predictor = dlib.shape_predictor(
            "media/ai/shape_predictor_68_face_landmarks.dat"
        )
        detector = dlib.get_frontal_face_detector()

        # print(img)
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        rects = detector(gray, 1)

        print("cv2 start")
        points = None
        for i, rect in enumerate(rects):
            points = np.matrix([[p.x, p.y] for p in predictor(gray, rect).parts()])
            show_parts = points
            for i, point in enumerate(show_parts):
                x = point[0, 0]
                y = point[0, 1]
                cv2.circle(img, (x, y), 1, (0, 255, 255), -1)
                cv2.putText(
                    img,
                    "{}".format(i + 1),
                    (x, y - 2),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.3,
                    (0, 255, 0),
                    1,
                )

        print("AI detection start")
        result = Face_Analysis(points)
        face_shape = Face_Shape(img)
        result["face_shape"] = face_shape
        print(result)

        result_data = AiResult(
            user_id=id,
            eye_lid=query["eyelid"],
            eye_len=result["eye_len"],
            eye_angle=result["eye_angle"],
            lip_len=result["lip_len"],
            lip_thick=result["lip_thick"],
            nostril=result["nostril"],
            nose_len=result["nose_len"],
            face_shape=result["face_shape"],
        )
        result_data.save()

        return Response(status=status.HTTP_201_CREATED)

    # def post(self, request):
    #     serializer = AiResultSerializer(
    #         data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def Face_Analysis(points):
    def Eyes_Length_Classification(points):
        a = points[0]
        b = points[36]
        c = points[39]
        d = points[27]

        a_x = a[0, 0]
        a_y = a[0, 1]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        d_x = d[0, 0]
        d_y = d[0, 1]

        if (d_x - a_x) / (c_x - b_x) > 2.2:
            return "short"
        elif 2.0 <= (d_x - a_x) / (c_x - b_x) <= 2.2:
            return "golden"
        else:
            return "long"

    def Eyes_Angle_Classification(points):
        b = points[36]
        c = points[39]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        if math.degrees(math.atan((c_y - b_y) / (c_x - b_x))) > 5:
            return "up"
        elif 4 <= math.degrees(math.atan((c_y - b_y) / (c_x - b_x))) <= 5:
            return "golden"
        else:
            return "down"

    def Lip_Length_Classification(points):
        a = points[36]
        b = points[39]
        c = points[48]
        d = points[54]

        a_x = a[0, 0]
        a_y = a[0, 1]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        d_x = d[0, 0]
        d_y = d[0, 1]

        if (d_x - c_x) / (b_x - a_x) > 1.6:
            return "short"
        elif 1.4 <= (d_x - c_x) / (b_x - a_x) <= 1.6:
            return "golden"
        else:
            return "long"

    def Lip_Thickness_Classification(points):
        a = points[48]
        b = points[54]
        c = points[51]
        d = points[57]

        a_x = a[0, 0]
        a_y = a[0, 1]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        d_x = d[0, 0]
        d_y = d[0, 1]

        if (b_x - a_x) / (d_y - c_y) > 3.1:
            return "thin"
        elif 2.9 <= (b_x - a_x) / (d_y - c_y) <= 3.1:
            return "golden"
        else:
            return "thick"

    def Nostrils_Classification(points):
        a = points[39]
        b = points[42]
        c = points[31]
        d = points[35]

        a_x = a[0, 0]
        a_y = a[0, 1]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        d_x = d[0, 0]
        d_y = d[0, 1]

        if (b_x - a_x) / (d_x - c_x) > 1.1:
            return "narrow"
        elif 0.9 <= (b_x - a_x) / (d_x - c_x) <= 1.1:
            return "golden"
        else:
            return "wide"

    def Nose_Length_Classification(points):
        a = points[21]
        b = points[33]
        c = points[33]
        d = points[8]

        a_x = a[0, 0]
        a_y = a[0, 1]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        d_x = d[0, 0]
        d_y = d[0, 1]

        if (b_y - a_y) / (d_y - c_y) > 1.1:
            return "long"
        elif 0.9 <= (b_y - a_y) / (d_y - c_y) <= 1.1:
            return "golden"
        else:
            return "short"

    result = {}
    result["nose_len"] = Nose_Length_Classification(points)
    result["nostril"] = Nostrils_Classification(points)
    result["lip_thick"] = Lip_Thickness_Classification(points)
    result["lip_len"] = Lip_Length_Classification(points)
    result["eye_angle"] = Eyes_Angle_Classification(points)
    result["eye_len"] = Eyes_Length_Classification(points)

    return result
    # print("Eyes_Length_Classification: {} \nEyes_Angle_Classification: {} \nLip_Length_Classification: {} \nLip_Thickness_Classification: {} \nNostrils_Classification: {} \nNose_Length_Classification: {}"
    # .format(Eyes_Length_Classification(points), Eyes_Angle_Classification(points), Lip_Length_Classification(points), Lip_Thickness_Classification(points), Nostrils_Classification(points), Nose_Length_Classification(points)))


def Face_Shape(img):
    ImageFile.LOAD_TRUNCATED_IMAGES = True

    IMG_WIDTH = 240
    IMG_HEIGHT = 240

    class_nums = 5

    pre_trained_model = EfficientNetB6(
        weights="imagenet", include_top=False, input_shape=(IMG_WIDTH, IMG_HEIGHT, 3)
    )

    model = Sequential()

    model.add(pre_trained_model)

    model.add(GlobalAveragePooling2D())

    model.add(Dense(256, activation="relu"))
    model.add(Dropout(0.5))
    model.add(Dense(128, activation="relu"))
    model.add(Dropout(0.5))
    model.add(Dense(class_nums, activation="softmax"))

    model.load_weights("media/ai/EfficientNetB6.h5")

    img = cv2.resize(img, (240, 240))
    img = np.expand_dims(img, axis=0)
    pred = model.predict(img)

    predicted_class_idx = np.argmax(pred, axis=-1)
    #class_dict = {0:'heart', 1:'oblong', 2:'oval', 3:'round', 4:'square'}
    class_dict = {0:'역삼각형', 1:'긴형', 2:'계란형', 3:'둥근형', 4:'각진형'}
    return(class_dict[predicted_class_idx[0]])
    
class AiDetect():
    print()
