# Google Cloud Vision API Example

This is an example project to use the Google Cloud Vision API. It uses Node.js as the language for the client, but feel free to swap that out, e.g., for Python or Java. However, you won't be able to use and adapt the example script then, and have to build your own.

1. Create a free Google Cloud Account via https://cloud.google.com/vision
2. Follow the guide to create a Google Cloud Vision project: https://cloud.google.com/vision/docs/setup
   - The guide suggest installing and using the [gcloud CLI](https://cloud.google.com/sdk/docs/install), which you can do
   - Alternatively, you can skip using the gcloud CLI and use a [Service Account](https://cloud.google.com/iam/docs/keys-create-delete#iam-service-account-keys-create-console) instead. This is what the provided example project does. When you do this, you can download a JSON key for the service account. The location of this file needs to be updated in `.env`.
3. Use the provided example code to check if authentication is working.
4. Extend the provided example code or write your own script, e.g., based on https://cloud.google.com/vision/docs/detect-labels-image-client-libraries
   
If you want to use Node.js and this example script (otherwise you have to build your own project):
1. Update `.env` with the location of your downloaded JSON key.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to run the example script.

The goal is to use the Google Cloud Vision API to identify the images under `./resources/` that contain at least one cat. The used images are a subset from the Animals-10 Kaggle data set (https://www.kaggle.com/datasets/alessiocorrado99/animals10). Find out how many of the 180 images have cats in them and list each filename with the respective prediction score.