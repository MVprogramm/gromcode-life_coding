"use strict";

const numbersList = [1, 2, 3, 4, 5];

console.log("pop(): delete an element from the end of an array");
console.log("pop() input: none");
console.log("pop() before: arr = ", numbersList);
console.log("pop() syntax: arr.pop();");
const resPop = numbersList.pop();
console.log("pop() return deleted element: ", resPop);
console.log("pop() after: arr = ", numbersList);

console.log("");

console.log("push(elem): add an element to the end of an array");
console.log("push(elem) input: added element");
console.log("push(elem) before: arr = ", numbersList);
console.log("push(elem) syntax: arr.push(5);");
const resPush = numbersList.push(5);
console.log("push(elem) return a new length of the array: ", resPush);
console.log("push(elem) after: arr = ", numbersList);

console.log("");

console.log("shift(): delete an element from the start of an array");
console.log("shift() input: none");
console.log("shift() before: arr = ", numbersList);
console.log("shift() syntax: arr.shift();");
const resShift = numbersList.shift();
console.log("shift() return deleted element: ", resShift);
console.log("shift() after: arr = ", numbersList);

console.log("");

console.log("unshift(elem): add an element to the start of an array");
console.log("unshift(elem) input: added element");
console.log("unshift(elem) before: arr =", numbersList);
console.log("unshift(elem) syntax: arr.unshift(1);");
const resUnshift = numbersList.unshift(1);
console.log("unshift(elem) return a new length of the array: ", resUnshift);
console.log("unshift(elem) after: arr = ", numbersList);

console.log("");

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

console.log(
  "filter(callback, index, arr): create a new array from arr, " +
    "filtered according to a callback with index iteration"
);
console.log("filter(callback) callback input: each element of array");
console.log("filter(callback) callback output: true or false");
console.log("filter(callback) input: callback function");
console.log("filter(callback) before: arr = ", numbersList);
console.log("filter(callback) syntax: arr.filter(num => num > 3);");
const resFilter = numbersList.filter((num) => num > 3);
console.log("filter(callback) return a new filtered array: ", resFilter);
console.log("filter(callback) after: arr = ", numbersList);
console.log("filter(callback) before: arr = ", anotherNumbersList);
console.log(
  "filter(callback) syntax: arr.filter((num, index) => index % 2 === 0);"
);
const evenPositions = anotherNumbersList.filter(
  (num, index) => index % 2 === 0
);
console.log("filter(callback) return: a new filtered array: ", evenPositions);
console.log("filter(callback) after: arr = ", anotherNumbersList);

console.log("");

console.log(
  "map(callback, index, arr, thisArg): create a new array from arr, " +
    "modified according to a callback from thisArg with index iteration"
);
console.log("map(callback) callback input: each element of array");
console.log("map(callback) callback output: each modified element of array");
console.log("map(callback) input: callback function");
console.log("map(callback) before: arr = ", anotherNumbersList);
console.log("map(callback) syntax: arr.map(num => num * num);");
const squaredNumbers = anotherNumbersList.map((num) => num * num);
console.log("map(callback) return a new modified array: ", squaredNumbers);
console.log("map(callback) after: arr = ", anotherNumbersList);

console.log("");

console.log(
  "find(callback, index, arr, thisArg): finding FIRST element in the arr, " +
    "according to a callback from thisArg with index iteration"
);
console.log("find(callback) callback input: element to find");
console.log("find(callback) callback output: true or false");
console.log("find(callback) input: callback function");
console.log("find(callback) before: arr = ", anotherNumbersList);
console.log("find(callback) syntax: arr.find(num => num % 2 != 0);");
const searchNumber = anotherNumbersList.find((num) => num % 2 != 0);
console.log("find(callback) return an element or undefined: ", searchNumber);
console.log("find(callback) after: arr = ", anotherNumbersList);

console.log("");

console.log(
  "some(callback, index, arr, thisArg): finding AT LEAST ONE element in the arr, " +
    "according to a callback from thisArg with index iteration"
);
console.log("some(callback) callback input: element to find");
console.log("some(callback) callback output: true or false");
console.log("some(callback) input: callback function");
console.log("some(callback) before: arr = ", anotherNumbersList);
console.log("some(callback) syntax: arr.some(num => num > 200);");
const searchOneNumber = anotherNumbersList.some((num) => num > 200);
console.log("some(callback) return true or false: ", searchOneNumber);
console.log("some(callback) after: arr = ", anotherNumbersList);

console.log("");

console.log(
  "every(callback, index, arr, thisArg): checking ALL elements in the arr, " +
    "according to a callback from thisArg with index iteration"
);
console.log("every(callback) callback input: if");
console.log("every(callback) callback output: true or false");
console.log("every(callback) input: callback function");
console.log("every(callback) before: arr = ", anotherNumbersList);
console.log("every(callback) syntax: arr.every(num => num > 200);");
const checkAllNumbers = anotherNumbersList.every((num) => num > 200);
console.log("every(callback) return true or false: ", checkAllNumbers);
console.log("every(callback) after: arr = ", anotherNumbersList);

console.log("");

console.log(
  "forEach(callback, value, index, arr, thisArg): iteration EACH value with index " +
    "in the arr, according to a callback from thisArg"
);
console.log("forEach(callback) callback input: element");
console.log("forEach(callback) callback output: undefined");
console.log("forEach(callback) input: callback function");
console.log("forEach(callback) before: arr = ", anotherNumbersList);
console.log(
  "forEach(callback) syntax: arr.forEach((num) => num < 0 ? console.log(num) : null);"
);
const eachNumber = anotherNumbersList.forEach((num) =>
  num < 0 ? console.log(num) : null
);
console.log("forEach(callback) return: ", eachNumber);
console.log("forEach(callback) after: arr = ", anotherNumbersList);

console.log("");
