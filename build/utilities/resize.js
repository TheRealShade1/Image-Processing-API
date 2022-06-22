"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Create a pipeline that will download an image, resize it and format it to different files
// Using Promises to know when the pipeline is complete
const fs_1 = __importDefault(require("fs"));
const got_1 = __importDefault(require("got"));
const sharp_1 = __importDefault(require("sharp"));
const sharpStream = (0, sharp_1.default)({
    failOnError: false
});
const promises = [];
promises.push(sharpStream.clone().jpeg({ quality: 150 }).toFile('originalFile.jpg'));
promises.push(sharpStream
    .clone()
    .resize({ width: 300 })
    .jpeg({ quality: 80 })
    .toFile('optimized-300.jpg'));
promises.push(sharpStream
    .clone()
    .resize({ width: 300 })
    .webp({ quality: 80 })
    .toFile('optimized-300.webp'));
got_1.default
    .stream('https://www.example.com/some-files-for-testing.jpg')
    .pipe(sharpStream);
Promise.all(promises)
    .then((res) => {
    console.log('Done', res);
})
    .catch((err) => {
    console.error(`Error while processing files, needs cleaning: ${err}`);
    try {
        fs_1.default.unlinkSync('originalFile.jpg');
        fs_1.default.unlinkSync('optimized-300.jpg');
        fs_1.default.unlinkSync('optimized-300.webp');
    }
    catch (e) {
        console.error(e);
    }
});
