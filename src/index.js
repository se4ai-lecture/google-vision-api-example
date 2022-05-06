// use dotenv to read the ENV variables from the .env file
require("dotenv").config();
// abort if the Google API key location is not present as an ENV variable
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GOOGLE_APPLICATION_CREDENTIALS === "") {
  console.error("Error: GOOGLE_APPLICATION_CREDENTIALS env variable not set! Aborting...");
  process.exit(1);
}

async function main() {
  // import the Google Cloud client library
  
  // create a client
  
  // use client to check the images in `./resources/`

  // output results
  
}

// execute main function
main();
