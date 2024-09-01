import sys
import numpy as np
import cv2
import face_recognition
import requests
import time

def fetch_image_from_url(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Check if the request was successful
        img_array = np.asarray(bytearray(response.content), dtype="uint8")
        img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        return img
    except requests.RequestException as e:
        print(f"Error fetching image: {e}")
        sys.exit(1)
    except cv2.error as e:
        print(f"Error processing image: {e}")
        sys.exit(1)

def get_face_encoding(image):
    encodings = face_recognition.face_encodings(image)
    if not encodings:
        print("No face found in the image")
        sys.exit(1)
    return encodings[0]

def capture_photo(auto_capture_delay=2):
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("Error: Could not open camera.")
        exit()

    # Wait for a specified delay
    time.sleep(auto_capture_delay)

    ret, frame = cap.read()
    cap.release()

    if not ret:
        print("Failed to capture image from webcam")
        return None

    if frame is None or frame.size == 0:
        print("Captured image is empty")
        return None

    # Save the captured image
    photo_filename = 'captured_photo.jpg'
    cv2.imwrite(photo_filename, frame)
    print(f"Photo captured and saved as '{photo_filename}'")

    return photo_filename

def match_faces(reference_encoding, captured_photo_filename):
    # Load the saved captured photo
    captured_img = cv2.imread(captured_photo_filename)
    if captured_img is None:
        print("Error loading captured image.")
        return False

    captured_img_rgb = cv2.cvtColor(captured_img, cv2.COLOR_BGR2RGB)
    captured_encodings = face_recognition.face_encodings(captured_img_rgb)

    if not captured_encodings:
        print("No face found in the captured image")
        return False

    captured_encoding = captured_encodings[0]
    results = face_recognition.compare_faces([reference_encoding], captured_encoding)
    return results[0]

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <profile_pic_url>")
        sys.exit(1)

    profile_pic_url = sys.argv[1]
    img = fetch_image_from_url(profile_pic_url)
    reference_encoding = get_face_encoding(img)

    captured_photo_filename = capture_photo()
    if captured_photo_filename is None:
        print("Failed to capture photo.")
        sys.exit(1)

    result = match_faces(reference_encoding, captured_photo_filename)

    print(f"{result}")

if __name__ == "__main__":
    main()
