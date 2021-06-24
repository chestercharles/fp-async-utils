# fp-async-utils
A library that exposes a handful of helpful FP-inspired utilities to work with asynchronous code.

## Installation
`npm i fp-async-utils`

## Usage
### asyncPipe
Apply a series of asynchronous OR synchronous functions to an input. Always returns a Promise.
```javascript
const addTwo = async (value) => value + 2;
const addTwoSync = (value) => value + 2;
const result = await asyncPipe(1, addTwo, addTwoSync);
console.log(result); // 5
```

### asyncFlow
Compose a function from a series of other functions applied left-to-right
```javascript
const addTwo = async (value) => value + 2;
const addTwoSync = (value) => value + 2;
const addFour = await asyncFlow(addTwo, addTwoSync);
const result = await addFour(1);
console.log(result); // 5
```

### ado
Inspired by applicative-do notiation. Takes an object where each key value is a promise and returns an object with the same keys where each value is the resolution of the promise.
```javascript
const promiseObj = {
  a: Promise.resolve(1),
  b: Promise.resolve(2),
};
const resolvedObj = await ado(promiseObj);
console.log(resolvedObj.a); // 1
```

### asyncMap
Apply a series of asynchronous OR synchronous functions to every item in an array. Always returns a Promise.
```javascript
const arr = [1, 2, 3];
const addTwo = async (value) => value + 2;
const result = await asyncPipe(arr, asyncMap(addTwo))
console.log(result); // [3, 4, 5]
```

### asyncFilter
Apply a asynchronous OR synchronous predicate to filter out items in an array. Always returns a Promise.
```javascript
const arr = [1, 2, 3];
const isEven = async (n) => n % 2 == 0;
const result = await asyncPipe(arr, asyncFilter(isEven));
console.log(result); // [2]
```

### setIn
Sets a value to an object's property
```javascript
const obj = { a: 1 };
const isEven = async (n) => n % 2 == 0;
const result = await asyncPipe(2, setIn(obj, 'b'));
console.log(result); // { a: 1, b: 2 }
```