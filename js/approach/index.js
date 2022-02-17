// How to work on tech tasks. Step by step guide

// 1. ***** WHAT? ***** Learn requirement
// 2. ***** HOW?  ***** Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

//algo
// 1. iterate numbers from 2 to num
// 2. check if prime
//  2.1. set a firstCounter = 2
//  2.2. set a secondCounter = 2
//  2.3. iterate all numbers from 2 to firstCounter
//  2.4. iterate secondCounter from 2 to firstCounter
//  2.5. if firstCounter / secondCounter === 0 - is not prime
//  2.6. if secondCounter less as firstCounter - increment secondCounter, else increment firstCounter
//  2.7. if firstCounter more as num - stop iterate.
// 3. if prime - console

// input: number
// return: undefined

function getPrimes(num) {
  for (let firstCounter = 2; firstCounter <= num; firstCounter++) {
    let isPrime = true;

    for (let secondCounter = 2; secondCounter < firstCounter; secondCounter++) {
      if (firstCounter % secondCounter === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(firstCounter);
    }
  }
}

//test data
getPrimes(10);
