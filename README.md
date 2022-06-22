# Udacity Image Processing API

## Overview / Tools

Node API for resizing images using [Sharp](https://www.npmjs.com/package/sharp)

Express

TypeScript

Jasmine for testing

### Scripts
- Install: ```npm install```
- Build: ```npm run build```
- Lint: ```npm run lint```
- Prettify: ```npm run prettify```
- Run unit tests: ```npm run test```
- Start server: ```npm run start```

### Usage
The server will listen on port 3000:

#### Brief instructions
http://localhost:3000/

#### Endpoint to resize images
http://localhost:3000/api/images

## API Format for resizing images

- /api/images?filename=danceforme&width=500&height=500

## View all thumbnails

- /api/thumbnails

## Requirements

Node v16.15.1

### How to start server

```
 - npm install
 - npm start
```

## How to start client

```
 - cd client
 - npm install
 - npm start
```

## Install Server and Client dependencies

```
  - npm run int
```

On the client, you can view all thumbnails but clicking on the "Thumbnails" tab and you can resize and image by clicking on the "Generate Thumbnails" tab

### Testing

```
 - npm run test

```

### Linting

NOTE: Before running this script ensure dependency for both client and server have been installed by running the command below:

```
  - npm run int
```

```
 - npm run lint

```

### Prettier

```
 - npm run prettier

```

