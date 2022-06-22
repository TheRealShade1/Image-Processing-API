// Create a pipeline that will download an image, resize it and format it to different files
// Using Promises to know when the pipeline is complete
import fs from 'fs';
import got from 'got';
import sharp from 'sharp';
const sharpStream = sharp({
  failOnError: false
});

const promises = [];

promises.push(
  sharpStream.clone().jpeg({ quality: 150 }).toFile('originalFile.jpg')
);

promises.push(
  sharpStream
    .clone()
    .resize({ width: 300 })
    .jpeg({ quality: 80 })
    .toFile('optimized-300.jpg')
);

promises.push(
  sharpStream
    .clone()
    .resize({ width: 300 })
    .webp({ quality: 80 })
    .toFile('optimized-300.webp')
);

got
  .stream('https://www.example.com/some-files-for-testing.jpg')
  .pipe(sharpStream);

Promise.all(promises)
  .then((res) => {
    console.log('Done', res);
  })
  .catch((err) => {
    console.error(`Error while processing files, needs cleaning: ${err}`);
    try {
      fs.unlinkSync('originalFile.jpg');
      fs.unlinkSync('optimized-300.jpg');
      fs.unlinkSync('optimized-300.webp');
    } catch (e) {
      console.error(e);
    }
  });
