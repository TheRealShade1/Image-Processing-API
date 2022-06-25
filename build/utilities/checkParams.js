"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkParams = void 0;
const arrays_1 = require("./arrays");
// Checks if all 3 parameters are being set in the URL
const checkParams = (query) => {
    const params = ['filename', 'width', 'height'];
    const paramsKeys = Object.keys(query);
    const widthAndHeight = [Number(query.width), Number(query.height)];
    // check if all the required parameters (params) are included in the query (paramsKeys) and if the width and height are both numbers
    return (0, arrays_1.itemsInArray)(params, paramsKeys) && (0, arrays_1.isArrOfNumbers)(widthAndHeight);
};
exports.checkParams = checkParams;
