import sys
import os
import pickle
import numpy as np
import cv2
import face_recognition
import cvzone


# open the camera and take the image after 10 seconds

def take_image():
    cap = cv2.VideoCapture(0)
    cap.set(3, 640)
    cap.set(4, 480)
    success, img = cap.read()
    # cv2.imwrite("image.jpg", img)
    cap.release()
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    Encodes = face_recognition.face_encodings(img)
    if len(Encodes) == 0:
        return 0
    encode = face_recognition.face_encodings(img)[0]
    return encode


y = take_image()

print(y)

# print("hello")
