import sys
import os
import pickle
import numpy as np
import cv2
import face_recognition
import cvzone


name = sys.argv[1]
# print("encd=", encd)


img = cv2.imread("uploads/" + name + ".jpg")
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
encodings = face_recognition.face_encodings(img)
if len(encodings) == 0:
    print("No face found")
    exit()
encodings = face_recognition.face_encodings(img)[0]

# print(encodings)


def take_image():
    cap = cv2.VideoCapture(0)
    cap.set(3, 640)
    cap.set(4, 480)
    success, img = cap.read()
    cap.release()
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    Encodes = face_recognition.face_encodings(img)
    if len(Encodes) == 0:
        return 0
    encode = face_recognition.face_encodings(img)[0]
    results = face_recognition.compare_faces([encodings], encode)
    return results


y = take_image()

print(y)
