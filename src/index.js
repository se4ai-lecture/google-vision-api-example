// use dotenv to read the ENV variables from the .env file
require("dotenv").config();
// abort if the Google API key location is not present as an ENV variable
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GOOGLE_APPLICATION_CREDENTIALS === "") {
  console.error("Error: GOOGLE_APPLICATION_CREDENTIALS env variable not set! Aborting...");
  process.exit(1);
}

// TODO: adapt the main function to send all images in `resources` to the Google Cloud Vision API and to identify all images with cat labels in the results

async function main() {
  // import the Google Cloud client library
  const vision = require("@google-cloud/vision");
  // create a client
  const client = new vision.ImageAnnotatorClient();

  // retrieve the results for an image without a cat
  const noCatResult = await client.labelDetection(
    "./resources/e83db50d29f4073ed1584d05fb1d4e9fe777ead218ac104497f5c978a6ebb3bf_640.jpg"
  );
  // retrieve the results for an image with a cat
  const catResult = await client.labelDetection(
    "./resources/ea36b20f20f0033ed1584d05fb1d4e9fe777ead218ac104497f5c978a7eebdbb_640.jpg"
  );

  // print out label annotations of the result to identify the necessary attributes
  console.log(noCatResult[0].labelAnnotations);
  console.log(catResult[0].labelAnnotations);
}

// execute main function
main();
