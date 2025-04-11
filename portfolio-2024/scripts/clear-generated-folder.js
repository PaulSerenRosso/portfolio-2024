
const KEYPOINTS_OUTPUT_DIR = 'src/assets/generated/projectsKeypoints'; // accessible in your final build
const OVERVIEW_OUTPUT_DIR = 'src/assets/generated/projectsOverview'; // accessible in your final build
const PROPS_OUTPUT_DIR = 'src/assets/generated/props'; // accessible in your final build
import fs from 'fs';
import path from 'path';
function clearFolder(folderPath) {
  // Read all files in the folder
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      return;
    }

    // Loop through each file and delete it
    files.forEach(file => {
      const filePath = path.join(folderPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error checking file stats:', err);
          return;
        }

        // If it's a file, delete it
        if (stats.isFile()) {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting file:', err);
            } else {
              console.log(`Deleted file: ${filePath}`);
            }
          });
        }
      });
    });
  });
}
  clearFolder(KEYPOINTS_OUTPUT_DIR);
  clearFolder(OVERVIEW_OUTPUT_DIR);
  clearFolder(PROPS_OUTPUT_DIR);
