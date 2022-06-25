"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = require("fs");
const fs_2 = __importDefault(require("fs"));
// Resizes the image to the width and height set in the parameters
const imageTransform = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const imageInput = path_1.default.join(__dirname, '../', '../', 'assets/', 'originals/', filename) +
        '.jpg';
    const imageOutputFolder = path_1.default.join(__dirname, '../', '../', 'assets/', 'thumbnails/');
    const imageOutput = path_1.default.join(__dirname, '../', '../', 'assets/', 'thumbnails/', filename) +
        `-${width}-${height}.jpg`;
    // if the image output folder doesn't exists, create it
    if (!fs_2.default.existsSync(imageOutputFolder)) {
        yield fs_1.promises.mkdir(imageOutputFolder);
    }
    try {
        // await for sharp to process the image, if it succeeds, returns the imageOutput
        yield (0, sharp_1.default)(imageInput).resize(width, height).toFile(imageOutput);
        return imageOutput;
    }
    catch (error) {
        // if not, returns the error
        return 'Image could not be processed.';
    }
});
exports.default = imageTransform;
