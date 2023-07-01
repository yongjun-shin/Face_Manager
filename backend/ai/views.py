from django.shortcuts import render
from rest_framework import generics

from .models import AiResult
from .serializers import AiResultSerializer

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
from tensorflow.keras.layers import Dropout, Dense, GlobalAveragePooling2D, BatchNormalization, Flatten
from tensorflow.keras.applications import EfficientNetB6
from tensorflow.keras.models import Sequential
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from datetime import datetime
import os
import shutil

class AiResultList(APIView):
    
    #model_weights = model.load_weights('media/ai/EfficientNetB6.h5')
    #model.weights = model_weights
    def get(self, request):
        airesults = AiResult.objects.all()
        
        serializer = AiResultSerializer(airesults, many=True)
        return Response(serializer.data)

    def post(self, request):
        print()
        data = request.data
        #print(data)
        image = data['image']
        id = data['user_id']
        
        #print(data['do'])
        #print(image)
        
        query = FaceInput.objects.filter(user_id = id).values()
        query = query[len(query)-1]
        print(query)
        
        img_path = query['image']
        #print(img_path)
        img = cv2.imread(img_path)
        
        predictor = dlib.shape_predictor("media/ai/shape_predictor_68_face_landmarks.dat")
        detector = dlib.get_frontal_face_detector()

        #print(img)
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        rects = detector(gray, 1)

        print("cv2 start")
        points = None
        for (i, rect) in enumerate(rects):
            points = np.matrix([[p.x, p.y] for p in predictor(gray, rect).parts()])
            show_parts = points
            for (i, point) in enumerate(show_parts):
                x = point[0,0]
                y = point[0,1]
                cv2.circle(img, (x, y), 1, (0, 255, 255), -1)
                cv2.putText(img, "{}".format(i + 1), (x, y - 2),
                cv2.FONT_HERSHEY_SIMPLEX, 0.3, (0, 255, 0), 1)
        
        print("AI detection start")
        result = Face_Analysis(points)        
        face_shape = Face_Shape(img)
        result['face_shape'] = face_shape
        print(result)
        
        result_data = AiResult(
            user_id = id,
            eye_len = result['eye_len'],
            eye_angle = result['eye_angle'],
            lip_len = result['lip_len'],
            lip_thick = result['lip_thick'],
            nostril = result['nostril'],
            nose_len = result['nose_len'],
            face_shape = result['face_shape'],
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

        if (d_x-a_x)/(c_x-b_x) >2.2:
            return('Short eye')
        elif 2.0<= (d_x-a_x)/(c_x-b_x) <= 2.2:
            return('Golden ratio eye')
        else:
            return('Long eye')


    def Eyes_Angle_Classification(points):
        b = points[36]
        c = points[39]

        b_x = b[0, 0]
        b_y = b[0, 1]

        c_x = c[0, 0]
        c_y = c[0, 1]

        if math.degrees(math.atan((c_y-b_y)/(c_x-b_x))) > 5:
            return('Up eyes')
        elif 4<= math.degrees(math.atan((c_y-b_y)/(c_x-b_x))) <= 5:
            return('Golden Ratio eyes')
        else:
            return('Down Eyes')

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

        if (d_x-c_x)/(b_x-a_x) > 1.6:
            return('Short Lip')
        elif 1.4 <= (d_x-c_x)/(b_x-a_x) <= 1.6:
            return('Golden Ration Lip')
        else:
            return('Long Lip')

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

        if (b_x-a_x)/(d_y-c_y) > 3.1:
            return('Thin Lip')
        elif 2.9 <= (b_x-a_x)/(d_y-c_y) <= 3.1:
            return('Golden Ration Lip')
        else:
            return('Thick Lip')

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

        if (b_x-a_x)/(d_x-c_x) > 1.1:
            return('Narrow Nostrils')
        elif 0.9 <= (b_x-a_x)/(d_x-c_x) <= 1.1:
            return('Golden Ratio Nostrils')
        else:
            return('Wide Nostrils')

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

        if (b_y-a_y)/(d_y-c_y) > 1.1:
            return('Long Nose')
        elif 0.9 <= (b_y-a_y)/(d_y-c_y) <= 1.1:
            return('Golden Ratio Nose')
        else:
            return('Short Nose')

    result = {}
    result['nose_len'] = Nose_Length_Classification(points)
    result['nostril'] = Nostrils_Classification(points)
    result['lip_thick'] = Lip_Thickness_Classification(points)
    result['lip_len'] = Lip_Length_Classification(points)
    result['eye_angle'] = Eyes_Angle_Classification(points)
    result['eye_len'] = Eyes_Length_Classification(points)
    
    return result
    #print("Eyes_Length_Classification: {} \nEyes_Angle_Classification: {} \nLip_Length_Classification: {} \nLip_Thickness_Classification: {} \nNostrils_Classification: {} \nNose_Length_Classification: {}"
    #.format(Eyes_Length_Classification(points), Eyes_Angle_Classification(points), Lip_Length_Classification(points), Lip_Thickness_Classification(points), Nostrils_Classification(points), Nose_Length_Classification(points)))    


    
def Face_Shape(img):
    ImageFile.LOAD_TRUNCATED_IMAGES = True

    IMG_WIDTH = 240
    IMG_HEIGHT = 240

    class_nums = 5

    pre_trained_model = EfficientNetB6(weights='imagenet', include_top=False, input_shape=(IMG_WIDTH,IMG_HEIGHT,3))

    model = Sequential()

    model.add(pre_trained_model)
    
    model.add(GlobalAveragePooling2D())

    model.add(Dense(256,activation='relu'))
    model.add(Dropout(0.5))
    model.add(Dense(128,activation='relu'))
    model.add(Dropout(0.5))
    model.add(Dense(class_nums, activation='softmax'))

    model.load_weights('media/ai/EfficientNetB6.h5')

    img = cv2.resize(img, (240, 240))
    img = np.expand_dims(img, axis=0)
    pred = model.predict(img)

    predicted_class_idx = np.argmax(pred, axis=-1)
    class_dict = {0:'Heart', 1:'Oblong', 2:'Oval', 3:'Round', 4:'Square'}

    return(class_dict[predicted_class_idx[0]])
    
class AiDetect():
    print()
