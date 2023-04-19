import io
import os
from google.cloud import vision

# use dotenv to read the ENV variables from the .env file
from dotenv import load_dotenv
load_dotenv()

# abort if the Google API key location is not present as an ENV variable
if not os.getenv("GOOGLE_APPLICATION_CREDENTIALS") or os.getenv("GOOGLE_APPLICATION_CREDENTIALS") == "":
    print("Error: GOOGLE_APPLICATION_CREDENTIALS env variable not set! Aborting...")
    exit(1)

# TODO: adapt the below code to send all images in `resources` to the Google Cloud Vision API and to identify all images with cat labels in the results

# create a client
client = vision.ImageAnnotatorClient()

# names of the image files to annotate
file_name_no_cat = os.path.abspath(
    "../resources/e83db50d29f4073ed1584d05fb1d4e9fe777ead218ac104497f5c978a6ebb3bf_640.jpg")
file_name_cat = os.path.abspath(
    "../resources/ea36b20f20f0033ed1584d05fb1d4e9fe777ead218ac104497f5c978a7eebdbb_640.jpg")

# load images into memory
with io.open(file_name_no_cat, "rb") as image_file:
    content_no_cat = image_file.read()
with io.open(file_name_cat, "rb") as image_file:
    content_cat = image_file.read()

# retrieve the results for an image without a cat
image = vision.Image(content=content_no_cat)
no_cat_result = client.label_detection(image=image)
# print out label annotations of the result to identify the necessary attributes
print(no_cat_result.label_annotations)

# retrieve the results for an image with a cat
image = vision.Image(content=content_cat)
cat_result = client.label_detection(image=image)
# print out label annotations of the result to identify the necessary attributes
print(cat_result.label_annotations)
