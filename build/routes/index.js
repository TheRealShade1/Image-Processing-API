"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_resize_1 = __importDefault(require("../utilities/sharp-resize"));
const routes = express_1.default.Router();
/* GET home page. */
routes.get('/', (req, res) => {
    res.render('index', {
        title: 'Image Sizer',
        h1Text: 'Web Image Size Generator',
        pText: 'Upload and resize an image to get the most common sizes used for the web'
    });
});
// route to display resized images
routes.post('/processed-images', upload.single('imageupload'), (req, res) => {
    let resizedImgs = [];
    try {
        resizedImgs = (0, sharp_resize_1.default)(imgUrl);
        if (resizedImgs.length === 7) {
            setTimeout(() => {
                res.render('processed-images', {
                    title: 'Image Sizer',
                    h1Text: 'Web Image Size Generator',
                    pText: 'Upload and resize an image to get the most common sizes used for the web',
                    imgUrls: resizedImgs
                });
            }, 600);
        }
    }
    catch (err) {
        console.error('Image resizing error:', err);
    }
});
exports.default = routes;
