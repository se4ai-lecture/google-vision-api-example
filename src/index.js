require("dotenv").config();
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GOOGLE_APPLICATION_CREDENTIALS === "") {
  console.error("Error: GOOGLE_APPLICATION_CREDENTIALS env variable not set! Aborting...");
  process.exit(1);
}

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
  fs.readdir("./resources", async (err, files) => {
    const promises = files.map((file) => client.labelDetection(`./resources/${file}`));

    Promise.all(promises).then((results) => {
      results.forEach((result, index) => {
        const catLabel = getCatLabel(result[0].labelAnnotations);
        if (catLabel) {
          catPredictions.push({
            fileName: files[index],
            score: catLabel.score
          });
        }
      });
      console.log(`The image set contains ${catPredictions.length} cats:`);
      catPredictions.forEach((cat) => console.log(`- ${cat.fileName} (${cat.score.toFixed(3)})`));
    });
  });
}

// execute main function
main();