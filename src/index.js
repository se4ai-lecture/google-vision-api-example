require("dotenv").config();
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GOOGLE_APPLICATION_CREDENTIALS === "") {
  console.error("Error: GOOGLE_APPLICATION_CREDENTIALS env variable not set! Aborting...");
  process.exit(1);
}

async function main() {
  // import the Google Cloud client library
  const vision = require("@google-cloud/vision");
  // create a client
  const client = new vision.ImageAnnotatorClient();

  const fileName = "e83db50d29f4073ed1584d05fb1d4e9fe777ead218ac104497f5c978a6ebb3bf_640.jpg";
  const [result] = await client.labelDetection(`./resources/${fileName}`);
  console.log(result.labelAnnotations);
}

// execute main function
main();
