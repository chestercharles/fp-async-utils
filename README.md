# fp-async-utils

A **type-safe** library that exposes a handful of helpful FP-inspired utilities to work with asynchronous code.
No dependencies.

## Installation

`npm i fp-async-utils`

## Usage

### pipe

Apply a series of asynchronous OR synchronous functions to an input. Always returns a Promise.

```typescript
const addTwo = async (value: number) => value + 2;
const addTwoSync = (value: number) => value + 2;
const result = await pipe(1, addTwo, addTwoSync);
console.log(result); // 5
```

### flow

Compose a function from a series of other functions applied left-to-right

```typescript
const addTwo = async (value: number) => value + 2;
const addTwoSync = (value: number) => value + 2;
const addFour = flow(addTwo, addTwoSync);
const result = await addFour(1);
console.log(result); // 5
```

### ado

Inspired by applicative-do notiation. Takes an object where each key value is a promise and returns an object with the same keys where each value is the resolution of the promise.

```typescript
const promiseObj = {
  a: Promise.resolve(1),
  b: Promise.resolve(2),
};
const resolvedObj = await ado(promiseObj);
console.log(resolvedObj.a); // 1
```

### map

Apply a series of asynchronous OR synchronous functions to every item in an array. Always returns a Promise.

```typescript
const arr = [1, 2, 3];
const addTwo = async (value: number) => value + 2;
const result = await pipe(arr, map(addTwo));
console.log(result); // [3, 4, 5]
```

### flatMap

Apply a series of asynchronous OR synchronous functions to every item in an array and flatten the result. Always returns a Promise.

```typescript
const arr = ["hello, world", "foo, bar"];
const split = (value) => value.split(", ");
const result = await pipe(arr, flatMap(split));
console.log(result); // ["hello", "world", "foo", "bar"]
```

### filter

Apply a asynchronous OR synchronous predicate to filter out items in an array. Always returns a Promise.

```typescript
const arr = [1, 2, 3];
const isEven = async (n: number) => n % 2 == 0;
const result = await pipe(arr, filter(isEven));
console.log(result); // [2]
```

### setIn

Sets a value to an object's property

```typescript
const obj = { a: 1, b: 1 };
const result = await pipe(2, setIn(obj, "b"));
console.log(result); // { a: 1, b: 2 }
```
