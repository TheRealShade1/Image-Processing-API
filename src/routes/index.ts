import express from 'express';
import fs from 'fs';
import path from 'path';
import imgResize from '../utilities/sharp-resize';

const routes = express.Router();

/* GET home page. */
routes.get('/', (req, res) => {
  res.render('index', {
    title: 'Image Sizer',
    h1Text: 'Web Image Size Generator',
    pText:
      'Upload and resize an image to get the most common sizes used for the web'
  });
});

// route to display resized images
routes.post('/processed-images', upload.single('imageupload'), (req, res) => {
  let resizedImgs: string[] | null = [];

  try {
    resizedImgs = imgResize(imgUrl);

    if (resizedImgs.length === 7) {
      setTimeout(() => {
        res.render('processed-images', {
          title: 'Image Sizer',
          h1Text: 'Web Image Size Generator',
          pText:
            'Upload and resize an image to get the most common sizes used for the web',
          imgUrls: resizedImgs
        });
      }, 600);
    }
  } catch (err) {
    console.error('Image resizing error:', err);
  }
});
export default routes;
