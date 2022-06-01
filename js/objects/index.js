// input
// obj, string, any

// return obj
/*
function addPropertyV1(obj, key, value) {
  obj[key] = value;

  return obj;
}

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...{}, ...obj, [key]: value };
}

console.log(addPropertyV1({ name: "John" }, "age", 17));
console.log(addPropertyV2({ name: "Ben" }, "age", 20));
console.log(addPropertyV3({ name: "Tom" }, "age", 22));
console.log(addPropertyV4({ name: "Nick" }, "age", 30));
*/
//------------------------------------------------------
// algo
// iterate keyList array
// function buildObject(keysList, valuesList) {
// const result = {};
// for (let i = 0; i < keysList.length; i++) {
//   result[keysList[i]] = valuesList[i];
// }
// return result;
// -------------------------------------------------
// return keysList.reduce((acc, key, index) => {
//   acc[key] = valuesList[index];
//   return acc;
// }, {});
// -------------------------------------------------
// return keysList.reduce(
//   (acc, key, index) => ({ ...acc, [key]: valuesList[index] }),
//   {}
// );
// }

// test data
// keys = ["name", "age"];
// values = ["Tom", 17];
// console.log(buildObject(keys, values));

//algo
// get keys, get values
// compare key.length
// compare every.method key/value ore some.method key/value
// function compareObjects(obj1, obj2) {
//   // return JSON.stringify(obj1) === JSON.stringify(obj2);

//   const arr1 = Object.entries(obj1);
//   const arr2 = Object.entries(obj2);

//   if (arr1.length != arr2.length) {
//     return false;
//   }

//   return arr1.every(
//     (arr, index) => arr[0] === arr2[index][0] && arr[1] === arr2[index][1]
//   );

// return !arr1.some(
//   (arr, index) => arr[0] != arr2[index][0] || arr[1] != arr2[index][1]
// );
// }

const compareObjects = (obj1, obj2) =>
  Object.keys({ ...obj1, ...obj2 }).every(
    (element) => obj1[element] === obj2[element]
  );

// examples
const obj1 = {
  name: "Tom",
  age: 17,
};

const obj2 = {
  name: "Bob",
  age: 17,
};

const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};

const obj4 = {
  name: "Tom",
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
//------------------------------------------------------
// function compareObjects(obj1, obj2) {
// 	const arr = Object.keys(obj1);
//     console.log(arr)
// 	if (arr.length != Object.keys(obj2).length){
// 		return false;
// 	}
// 	return arr.every(el => obj1[el] === obj2[el])
// }

// function compareObjects(obj1, obj2) {
//   const keys = Object.keys({ ...obj1, ...obj2 });
//   if (Object.keys(obj1).length != Object.keys(obj2).length) {
//     return false;
//   }
//   return keys.every(key => obj1[key] === obj2[key]);
// }

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   const values1 = Object.values(obj1);
//   const values2 = Object.values(obj2);

//   const isKeysEqual = keys1.every((value, index) => value === keys2[index]);
//   const isValueEqual = values1.every((value, index) => value === values2[index]);

//   if (!isKeysEqual || !isValueEqual || keys1.length !== keys2.length) {
//     return false;
//   }

//   return true;
// }

// function compareObjects(obj1, obj2) {
//   const firstArrKeyVal = [...Object.keys(obj1), ...Object.values(obj1)];
//   const secondArrKeyVal = [...Object.keys(obj2), ...Object.values(obj2)];

//   if (!(firstArrKeyVal.length === secondArrKeyVal.length)) {
//     return false;
//   }

//   return firstArrKeyVal.every((value, index) => value === secondArrKeyVal[index]);
// }

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const values1 = Object.values(obj1);
//   const keys2 = Object.keys(obj2);
//   const values2 = Object.values(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   return keys1.every((el, index) => {
//     return el === keys2[index] && values1[index] === values2[index];
//   });
// }

// function compareObjects(obj1, obj2) {
//   const entriesObj1 = Object.keys(obj1);
//   const entriesObj2 = Object.keys(obj2);

//   if (entriesObj1.length !== entriesObj2.length) {
//     return false;
//   }

//   return entriesObj1.reduce((acc, key) => {
//     return acc && obj1[key] === obj2[key];
//   }, true);
// }

// V2

// // V3
// function compareObjects4(obj1, obj2) {
//   let arr = Object.entries(obj1).join() === Object.entries(obj2).join();

//   return arr;
// }

// function compareObjects(obj1, obj2) {
//   if (!(Object.keys(obj1).length === Object.keys(obj2).length)) {
//     return false;
//   }
//   const objFirstKeys = Object.keys(obj1);
//   const objSecondKeys = Object.keys(obj2);
//   const objFirstValues = Object.values(obj1);
//   const objSecondValues = Object.values(obj2);

//   return objFirstKeys.every(
//     (key, index) =>
//       (key === objSecondKeys[index]) === (objFirstValues[index] === objSecondValues[index]),
//   );
// }

// function compareObjects(obj1, obj2) {

//   return Object.keys(obj1).length === Object.keys(obj2).length &&
//     Object.keys(obj1).every(key => obj1[key] === obj2[key]);
// }
