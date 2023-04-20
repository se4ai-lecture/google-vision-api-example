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


def get_cat_label(labels):
    # iterates through a label annotations array and returns the individual label if a cat is found; returns None if no cat is found
    cat_label = None
    for label in labels:
        if label.description == "Cat":
            cat_label = label
    return cat_label


# create a client
client = vision.ImageAnnotatorClient()

cat_predictions = []

# iterate over list of image file names
path = "../resources"
for file in os.listdir(path):
    with open(os.path.join(path, file), "rb") as image_file:
        content = image_file.read()
        # send an API request for each file name
        image = vision.Image(content=content)
        response = client.label_detection(image=image)

        # check if there is a cat label in the annotations (if yes, save it to the cat_predictions list)
        cat_label = get_cat_label(response.label_annotations)
        if cat_label:
            cat_predictions.append({
                "fileName": file,
                "score": cat_label.score
            })

# print out the results
print(f"The image set contains {len(cat_predictions)} cats.")
for cat in cat_predictions:
    print(f"- {cat['fileName']} ({cat['score']:.3f})")
