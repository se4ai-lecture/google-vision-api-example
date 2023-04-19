require("dotenv").config();
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GOOGLE_APPLICATION_CREDENTIALS === "") {
  console.error("Error: GOOGLE_APPLICATION_CREDENTIALS env variable not set! Aborting...");
  process.exit(1);
}

// iterates through a label annotations array and returns the individual label if a cat is found; returns null if no cat is found
function getCatLabel(labels) {
  let catLabel = null;
  labels.forEach((label) => {
    if (label.description === "Cat") {
      catLabel = label;
    }
  });
  return catLabel;
}

async function main() {
  // import the Google Cloud client library
  const vision = require("@google-cloud/vision");
  // create a client
  const client = new vision.ImageAnnotatorClient();

  const catPredictions = [];

  // iterate over list of image file names
  const fs = require("fs");
  fs.readdir("../resources", async (err, files) => {
    // send an API request for each file name
    const promises = files.map((file) => client.labelDetection(`../resources/${file}`));
    // wait until all requests have resolved, then iterate over the results
    Promise.all(promises).then((results) => {
      results.forEach((result, index) => {
        // check if there is a cat label in the annotations (if yes, save it to the catPredictions array)
        const catLabel = getCatLabel(result[0].labelAnnotations);
        if (catLabel) {
          catPredictions.push({
            fileName: files[index],
            score: catLabel.score
          });
        }
      });
      // print out the results
      console.log(`The image set contains ${catPredictions.length} cats.`);
      catPredictions.forEach((cat) => console.log(`- ${cat.fileName} (${cat.score.toFixed(3)})`));
    });
  });
}

// execute main function
main();
