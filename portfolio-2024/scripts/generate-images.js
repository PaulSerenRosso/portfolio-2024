// scripts/generate-images.js
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const KEYPOINTS_INPUT_DIR = 'src/toGenerated/keypoints'; // your source images
const KEYPOINTS_OUTPUT_DIR = 'src/assets/generated/projectsKeypoints'; // accessible in your final build
const OVERVIEW_INPUT_DIR = 'src/toGenerated/overviews'; // your source images
const OVERVIEW_OUTPUT_DIR = 'src/assets/generated/projectsOverview'; // accessible in your final build
const PROPS_INPUT_DIR = 'src/toGenerated/props'; // your source images
const PROPS_OUTPUT_DIR = 'src/assets/generated/props'; // accessible in your final build
const GRADIENTS_INPUT_DIR = 'src/toGenerated/gradients'; // your source images
const GRADIENTS_OUTPUT_DIR = 'src/assets/generated/gradients'; // accessible in your final build
const CONTENT_SIZES = 1920;
const PROPS_SIZES = 500;
const GRADIENTS_SIZES = 1920;
const CONTENT_FORMAT = ['jpeg', "webp"];
const PROP_FORMAT = ["png", "webp"];
const GRADIENT_FORMAT = ["png", "webp"];
resizeImage(KEYPOINTS_INPUT_DIR, KEYPOINTS_OUTPUT_DIR, CONTENT_SIZES, CONTENT_FORMAT);
resizeImage(OVERVIEW_INPUT_DIR, OVERVIEW_OUTPUT_DIR, CONTENT_SIZES, CONTENT_FORMAT );
resizeImage(PROPS_INPUT_DIR, PROPS_OUTPUT_DIR,PROPS_SIZES, PROP_FORMAT,80);
resizeImage(GRADIENTS_INPUT_DIR, GRADIENTS_OUTPUT_DIR, GRADIENTS_SIZES, GRADIENT_FORMAT,100  )
function resizeImage(inputDir, outputDir, size, formats, pngQuality) {


  fs.readdirSync(inputDir).forEach(file => {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    formats.forEach(format =>{
      switch (format){
        case "jpeg":{
          sharp(inputPath).toFormat("jpeg")
            .resize(size)
            .toFile(path.join(outputDir, `${name}.jpg`))
            .then(() => console.log(`Created ${name}.jpg`))
            .catch(err => console.error(err));
          break;
        }
        case "webp":{
          sharp(inputPath).toFormat("webp")
            .resize(size)
            .toFile(path.join(outputDir, `${name}.webp`))
            .then(() => console.log(`Created ${name}.webp`))
            .catch(err => console.error(err));
          break;
        }
        case "png":{
          sharp(inputPath).toFormat("png")
            .resize(size).png({quality:pngQuality})
            .toFile(path.join(outputDir, `${name}.png`))
            .then(() => console.log(`Created ${name}.png`))
            .catch(err => console.error(err));
          break;
        }
      }

    })
  });
}



