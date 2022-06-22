import supertest from 'supertest';
import fs from 'fs';
import path from 'path';
import app from '../index';
import imgResize from '../utilities/sharp-resize';

const request = supertest(app);

describe('Server API / Endpoint Test', async () => {
  beforeAll(() => {
    // empty build/exported-images folder before test
    fs.rmdirSync('build/exported-images', { recursive: true });

    // Create Dell XPS 13 folder for the test
    try {
      fs.mkdirSync(
        path.resolve('build', 'exported-images', 'Dell XPS 13'),
        { recursive: true }
      );
    } catch (err) {
      console.error(
        'Error occurred during file and folder creation for testing',
        err
      );
    }

    const pathToTestImage = path.resolve(
      'build',
      'test-images',
      'Dell XPS 13.jpg'
    );
    const pathImgOutput = path.resolve(
      'build',
      'exported-images',
      'Dell XPS 13',
      'Dell XPS 13.jpg'
    );

    try {
      fs.copyFileSync(pathToTestImage, pathImgOutput);
    } catch (err) {
      console.error('Error during testing to try copying file:', err);
    }

    try {
      if (
        fs.existsSync(
          path.join(
            'build',
            'exported-images',
            'Dell XPS 13',
            'Dell XPS 13.jpg'
          )
        )
      ) {
        imgResize(pathImgOutput);
      }
    } catch (err) {
      console.error('Error occurred during Sharp image resize step');
    }
  });

  it('get / with status of 200', async () => {
    await request.get('/').expect(200);
  });

  // image processing route
  it('get /processed-images with status of 200', () => {
    request.post('/processed-images').expect(200);
  });

  it('/processed-image generated Dell XPS 13_150.jpg', () => {
    expect(
      fs.existsSync(
        path.join(
          'build',
          'exported-images',
          'Dell XPS 13',
          'Dell XPS 13_150.jpg'
        )
      )
    ).toBeTruthy();
  });

  it('/processed-image generated Dell XPS 13_300.jpg', () => {
    expect(
      fs.existsSync(
        path.join(
          'build',
          'exported-images',
          'Dell XPS 13',
          'Dell XPS 13_300.jpg'
        )
      )
    ).toBeTruthy();
  });

  it('/processed-image generated Dell XPS 13_500.jpg', () => {
    expect(
      fs.existsSync(
        path.join(
          'build',
          'exported-images',
          'Dell XPS 13',
          'Dell XPS 13_500.jpg'
        )
      )
    ).toBeTruthy();
  });

  it('/processed-image generated Dell XPS 13_800.jpg', () => {
    expect(
      fs.existsSync(
        path.join(
          'build',
          'exported-images',
          'Dell XPS 13',
          'Dell XPS 13_800.jpg'
        )
      )
    ).toBeTruthy();
  });

  it('/processed-image generated Dell XPS 13_1080.jpg', () => {
    expect(
      fs.existsSync(
        path.join(
          'build',
          'exported-images',
          'Dell XPS 13',
          'Dell XPS 13_1080.jpg'
        )
      )
    ).toBeTruthy();
  });

  it('/processed-image generated Dell XPS 13_1280.jpg', () => {
    expect(
      fs.existsSync(
        path.join(
          'build',
          'exported-images',
          'Dell XPS 13',
          'Dell XPS 13_1280.jpg'
        )
      )
    ).toBeTruthy();
  });

  it('/processed-image generated Dell XPS 13_1920.jpg', () => {
    expect(
      fs.existsSync(
        path.join(
          'build',
          'exported-images',
          'Dell XPS 13',
          'Dell XPS 13_1920.jpg'
        )
      )
    ).toBeTruthy();
  });
});