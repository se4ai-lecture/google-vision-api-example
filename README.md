# Google Cloud Vision API Example

This is an example project to use the Google Cloud Vision API. It uses Node.js as the language for the client, but feel free to swap that out, e.g., for Python or Java. However, you won't be able to use and adapt the example script then, and have to build your own.

1. Create a free Google Cloud Account via https://cloud.google.com/vision
2. Follow the guide to set up a project and service key with which you can use the API: https://cloud.google.com/vision/docs/detect-labels-image-client-libraries (at the end, you should have downloaded a JSON key file)
   
If you want to use Node.js and this example script (otherwise you have to build your own project):
1. Update `.env` with the location of your downloaded JSON key.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to run the example script.

The goal is to use the Google Cloud Vision API to identify the images under `./resources/` that contain at least one cat. The used images are a subset from the Animals-10 Kaggle data set (https://www.kaggle.com/datasets/alessiocorrado99/animals10). Find out how many of the 180 images have cats in them and list each filename with the respective prediction score.