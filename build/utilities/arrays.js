"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrOfNumbers = exports.itemsInArray = void 0;
// Checks if items in an array (items) are all included in another array (arr)
const itemsInArray = (arr, items) => {
    return arr.every((item) => items.indexOf(item) !== -1);
};
exports.itemsInArray = itemsInArray;
// Checks if the items in an array are all numbers
const isArrOfNumbers = (arr) => {
    return arr.every((item) => Number.isInteger(item));
};
exports.isArrOfNumbers = isArrOfNumbers;
