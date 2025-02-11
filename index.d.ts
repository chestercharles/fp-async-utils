type SoA<T> = T | Promise<T>;
type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;
/**
 * Applicative Do: Takes an object where each key value is a promise and returns an
 * object with the same keys where each value is the resolution of the promise.
 */
export declare function ado<
  T extends Record<string, any>,
  R extends {
    [P in keyof T]: ThenArg<T[P]>;
  }
>(promiseObject: T): Promise<R>;
/**
 * Compose a function from a series of other functions applied left-to-right
 */
export declare function flow<R0, R1>(
  f1: (a: R0) => SoA<R1>
): (input: R0) => Promise<R1>;
export declare function flow<R0, R1, R2>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>
): (input: R0) => Promise<R2>;
export declare function flow<R0, R1, R2, R3>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>
): (input: R0) => Promise<R3>;
export declare function flow<R0, R1, R2, R3, R4>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>
): (input: R0) => Promise<R4>;
export declare function flow<R0, R1, R2, R3, R4>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>
): (input: R0) => Promise<R4>;
export declare function flow<R0, R1, R2, R3, R4, R5>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>
): (input: R0) => Promise<R5>;
export declare function flow<R0, R1, R2, R3, R4, R5, R6>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>
): (input: R0) => Promise<R6>;
export declare function flow<R0, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>
): (input: R0) => Promise<R7>;
export declare function flow<R0, R1, R2, R3, R4, R5, R6, R7, R8>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>
): (input: R0) => Promise<R8>;
export declare function flow<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>,
  f9: (a: R8) => SoA<R9>
): (input: R0) => Promise<R9>;
export declare function flow<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>,
  f9: (a: R8) => SoA<R9>,
  f10: (a: R9) => SoA<R10>
): (input: R0) => Promise<R10>;
/**
 * Compose a function from a series of other functions applied left-to-right. Alias for `flow`.
 */
export declare function asyncFlow<R0, R1>(
  f1: (a: R0) => SoA<R1>
): (input: R0) => Promise<R1>;
export declare function asyncFlow<R0, R1, R2>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>
): (input: R0) => Promise<R2>;
export declare function asyncFlow<R0, R1, R2, R3>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>
): (input: R0) => Promise<R3>;
export declare function asyncFlow<R0, R1, R2, R3, R4>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>
): (input: R0) => Promise<R4>;
export declare function asyncFlow<R0, R1, R2, R3, R4>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>
): (input: R0) => Promise<R4>;
export declare function asyncFlow<R0, R1, R2, R3, R4, R5>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>
): (input: R0) => Promise<R5>;
export declare function asyncFlow<R0, R1, R2, R3, R4, R5, R6>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>
): (input: R0) => Promise<R6>;
export declare function asyncFlow<R0, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>
): (input: R0) => Promise<R7>;
export declare function asyncFlow<R0, R1, R2, R3, R4, R5, R6, R7, R8>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>
): (input: R0) => Promise<R8>;
export declare function asyncFlow<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>,
  f9: (a: R8) => SoA<R9>
): (input: R0) => Promise<R9>;
export declare function asyncFlow<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>,
  f9: (a: R8) => SoA<R9>,
  f10: (a: R9) => SoA<R10>
): (input: R0) => Promise<R10>;
/**
 * Apply a series of asynchronous OR synchronous functions to an input. Always returns a Promise.
 */
export declare function pipe<R0, R1>(
  input: R0,
  f1: (a: R0) => SoA<R1>
): Promise<R1>;
export declare function pipe<R0, R1, R2>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>
): Promise<R2>;
export declare function pipe<R0, R1, R2, R3>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>
): Promise<R3>;
export declare function pipe<R0, R1, R2, R3, R4>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>
): Promise<R4>;
export declare function pipe<R0, R1, R2, R3, R4>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>
): Promise<R4>;
export declare function pipe<R0, R1, R2, R3, R4, R5>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>
): Promise<R5>;
export declare function pipe<R0, R1, R2, R3, R4, R5, R6>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>
): Promise<R6>;
export declare function pipe<R0, R1, R2, R3, R4, R5, R6, R7>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>
): Promise<R7>;
export declare function pipe<R0, R1, R2, R3, R4, R5, R6, R7, R8>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>
): Promise<R8>;
export declare function pipe<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>,
  f9: (a: R8) => SoA<R9>
): Promise<R9>;
export declare function pipe<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>,
  f9: (a: R8) => SoA<R9>,
  f10: (a: R9) => SoA<R10>
): Promise<R10>;
/**
 * Apply a series of asynchronous OR synchronous functions to an input. Always returns a Promise. Alias for `pipe`.
 */
export declare function asyncPipe<R0, R1>(
  input: R0,
  f1: (a: R0) => SoA<R1>
): Promise<R1>;
export declare function asyncPipe<R0, R1, R2>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>
): Promise<R2>;
export declare function asyncPipe<R0, R1, R2, R3>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>
): Promise<R3>;
export declare function asyncPipe<R0, R1, R2, R3, R4>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>
): Promise<R4>;
export declare function asyncPipe<R0, R1, R2, R3, R4>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>
): Promise<R4>;
export declare function asyncPipe<R0, R1, R2, R3, R4, R5>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>
): Promise<R5>;
export declare function asyncPipe<R0, R1, R2, R3, R4, R5, R6>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>
): Promise<R6>;
export declare function asyncPipe<R0, R1, R2, R3, R4, R5, R6, R7>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>
): Promise<R7>;
export declare function asyncPipe<R0, R1, R2, R3, R4, R5, R6, R7, R8>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>
): Promise<R8>;
export declare function asyncPipe<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>,
  f9: (a: R8) => SoA<R9>
): Promise<R9>;
export declare function asyncPipe<R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
  input: R0,
  f1: (a: R0) => SoA<R1>,
  f2: (a: R1) => SoA<R2>,
  f3: (a: R2) => SoA<R3>,
  f4: (a: R3) => SoA<R4>,
  f5: (a: R4) => SoA<R5>,
  f6: (a: R5) => SoA<R6>,
  f7: (a: R6) => SoA<R7>,
  f8: (a: R7) => SoA<R8>,
  f9: (a: R8) => SoA<R9>,
  f10: (a: R9) => SoA<R10>
): Promise<R9>;
/**
 * Apply a series of asynchronous OR synchronous functions to every item in an array. Always returns a Promise.
 */
export declare function map<Item, MappedItem>(
  fn: (a: Item) => MappedItem
): (arr: Item[]) => Promise<ThenArg<MappedItem>[]>;
/**
 * Apply a series of asynchronous OR synchronous functions to every item in an array and flatten the result. Always returns a Promise.
 */
export declare function flatMap<Item, MappedItem extends Array>(
  fn: (a: Item) => MappedItem
): (arr: Item[]) => Promise<ThenArg<MappedItem[number]>[]>;
/**
 * Apply a series of asynchronous OR synchronous functions to every item in an array. Always returns a Promise. Alias for `map`.
 */
export declare function asyncMap<Item, MappedItem>(
  fn: (a: Item) => MappedItem
): (arr: Item[]) => Promise<ThenArg<MappedItem>[]>;
/**
 * Sets a value to an object's property
 */
export declare function setIn<
  Obj extends Record<string, any>,
  Propery extends keyof Obj
>(obj: Obj, prop: Propery): (val: Obj[Propery]) => Obj;
/**
 * Apply a asynchronous OR synchronous predicate to filter out items in an array. Always returns a Promise.
 */
export declare function filter<Item>(
  fn: (a: Item) => boolean
): (arr: Item[]) => Promise<NonNullable<Item>[]>;
/**
 * Apply a asynchronous OR synchronous predicate to filter out items in an array. Always returns a Promise. Alias for `filter`.
 */
export declare function asyncFilter<Item>(
  fn: (a: Item) => boolean
): (arr: Item[]) => Promise<NonNullable<Item>[]>;
