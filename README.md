# Google Cloud Vision API Example

This is an example project to use the Google Cloud Vision API. It provides example scripts in Node.js and Python, but feel free to swap that out for, e.g., [Java or Go](https://cloud.google.com/vision/docs/detect-labels-image-client-libraries). However, you won't be able to use and adapt the example scripts then, and have to build your own.

Prerequisites and setup:
1. Create a free Google Cloud Account via https://cloud.google.com/vision
2. Follow [this guide](https://cloud.google.com/vision/docs/setup) to create a Google Cloud Vision project
   - The guide suggest installing and using the [gcloud CLI](https://cloud.google.com/sdk/docs/install) on your local machine, which you can do if you like CLIs
   - Alternatively, you can skip this and use a [Service Account](https://cloud.google.com/iam/docs/keys-create-delete#iam-service-account-keys-create-console) instead. This is what the provided example projects do. When you choose this option, you can download a JSON key for the service account. The location of this file needs to be updated in `.env` (depending on which language you choose, Node.js or Python)
3. Use one of the provided example scripts to check if authentication is working (see below for usage instructions)
4. Now you can adapt the provided example code or [write your own script](https://cloud.google.com/vision/docs/detect-labels-image-client-libraries)

The goal is to use the Google Cloud Vision API to identify the images under `./resources/` that contain a cat. The used images are a subset from the [Animals-10 Kaggle data set](https://www.kaggle.com/datasets/alessiocorrado99/animals10). Find out how many of the 180 images have cats in them and list each filename with the respective prediction score.

When using the Node.js example script (`node-example`):
1. Update `.env` with the location of your downloaded JSON key.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to run the example script.

When using the Python example script (`python-example`):
1. Update `.env` with the location of your downloaded JSON key.
2. Run `pip install -r requirements.txt` to install all dependencies.
3. Run `python main.py` to run the example script.