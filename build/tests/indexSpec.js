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
const supertest_1 = __importDefault(require("supertest"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Test endpoint response', () => {
    it('gets the api/images endpoint and returns a 200 error if no parameters are set', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images');
        expect(response.status).toBe(200);
    }));
});
describe('Test image processing', () => {
    const filename = 'santamonica';
    const width = '300';
    const height = '300';
    const outputPath = path_1.default.join(__dirname, '../', '../', 'assets/', 'thumbnails/', filename) +
        `-${width}-${height}.jpg`;
    it('resizes an image when proper parameters are set in the url', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get(`/api/images?filename=${filename}&width=${width}&height=${height}`);
        expect(fs_1.default.existsSync(outputPath)).toBeTrue();
    }));
    /* it('returns a proper error message when the image to be processed does not exist', async () => {
       const response = await request.get(
         `/api/images?filename=test&width=${width}&height=${height}`
       );
       expect(response.text).toBe(
         'There is no such file on the server, please verify the file name.'
       );
     });*/
    it('returns a proper error message when one of the url parameters is not set', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get(`/api/images?filename=${filename}&width=${width}`);
        expect(response.text).toBe('Please set a filename, width and height as parameters in the url (all 3 are mandatory and width and height must be numbers).');
    }));
    it('returns a proper error message if width or height are not numbers', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get(`/api/images?filename=${filename}&width=${width}&height=test`);
        expect(response.text).toBe('Please set a filename, width and height as parameters in the url (all 3 are mandatory and width and height must be numbers).');
    }));
});
