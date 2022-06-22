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
const sharp_resize_1 = __importDefault(require("../utilities/sharp-resize"));
const request = (0, supertest_1.default)(index_1.default);
describe('Server API / Endpoint Test', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeAll(() => {
        // empty build/exported-images folder before test
        fs_1.default.rmdirSync('build/exported-images', { recursive: true });
        // Create Dell XPS 13 folder for the test
        try {
            fs_1.default.mkdirSync(path_1.default.resolve('build', 'exported-images', 'Dell XPS 13'), { recursive: true });
        }
        catch (err) {
            console.error('Error occurred during file and folder creation for testing', err);
        }
        const pathToTestImage = path_1.default.resolve('build', 'test-images', 'Dell XPS 13.jpg');
        const pathImgOutput = path_1.default.resolve('build', 'exported-images', 'Dell XPS 13', 'Dell XPS 13.jpg');
        try {
            fs_1.default.copyFileSync(pathToTestImage, pathImgOutput);
        }
        catch (err) {
            console.error('Error during testing to try copying file:', err);
        }
        try {
            if (fs_1.default.existsSync(path_1.default.join('build', 'exported-images', 'Dell XPS 13', 'Dell XPS 13.jpg'))) {
                (0, sharp_resize_1.default)(pathImgOutput);
            }
        }
        catch (err) {
            console.error('Error occurred during Sharp image resize step');
        }
    });
    it('get / with status of 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get('/').expect(200);
    }));
    // image processing route
    it('get /processed-images with status of 200', () => {
        request.post('/processed-images').expect(200);
    });
    it('/processed-image generated Dell XPS 13_150.jpg', () => {
        expect(fs_1.default.existsSync(path_1.default.join('build', 'exported-images', 'Dell XPS 13', 'Dell XPS 13_150.jpg'))).toBeTruthy();
    });
    it('/processed-image generated Dell XPS 13_300.jpg', () => {
        expect(fs_1.default.existsSync(path_1.default.join('build', 'exported-images', 'Dell XPS 13', 'Dell XPS 13_300.jpg'))).toBeTruthy();
    });
    it('/processed-image generated Dell XPS 13_500.jpg', () => {
        expect(fs_1.default.existsSync(path_1.default.join('build', 'exported-images', 'Dell XPS 13', 'Dell XPS 13_500.jpg'))).toBeTruthy();
    });
    it('/processed-image generated Dell XPS 13_800.jpg', () => {
        expect(fs_1.default.existsSync(path_1.default.join('build', 'exported-images', 'Dell XPS 13', 'Dell XPS 13_800.jpg'))).toBeTruthy();
    });
    it('/processed-image generated Dell XPS 13_1080.jpg', () => {
        expect(fs_1.default.existsSync(path_1.default.join('build', 'exported-images', 'Dell XPS 13', 'Dell XPS 13_1080.jpg'))).toBeTruthy();
    });
    it('/processed-image generated Dell XPS 13_1280.jpg', () => {
        expect(fs_1.default.existsSync(path_1.default.join('build', 'exported-images', 'Dell XPS 13', 'Dell XPS 13_1280.jpg'))).toBeTruthy();
    });
    it('/processed-image generated Dell XPS 13_1920.jpg', () => {
        expect(fs_1.default.existsSync(path_1.default.join('build', 'exported-images', 'Dell XPS 13', 'Dell XPS 13_1920.jpg'))).toBeTruthy();
    });
}));
