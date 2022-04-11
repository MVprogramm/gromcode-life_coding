/*
function: filter
    input: arr, callback
    output: arr
*/

/* 
function: callback
    input: elem
    output: boolean
*/

/*
algorithm
    1. iterate arr
    2. check callback to elem
    3. if true - push to res arr
*/

const filterArrayElements = (arr, callback) => {
  res = [];
  for (let el of arr) {
    if (callback(el)) {
      res.push(el);
    }
  }

  return res;
};

/* 
test
    data: [1, 2, 3, 4, 5]
    callback el => el < 3
    res: [1, 2]
*/
const test = (el) => el < 3;
console.log(filterArrayElements([1, 2, 3], test));
