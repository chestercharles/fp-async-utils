/**
 * Applicative Do: Takes an object where each key value is a promise and returns an
 * object with the same keys where each value is the resolution of the promise.
 */
export function ado(promiseObject: Record<any, any>): Promise<{}>;
/**
 * Compose a function from a series of other functions applied left-to-right
 */
export function asyncFlow(...fns: any[]): (input: any) => any;
/**
 * Apply a series of asynchronous OR synchronous functions to an input. Always returns a Promise.
 */
export function asyncPipe(input: any, ...fns: any[]): Promise<any>;
/**
 * Apply a series of asynchronous OR synchronous functions to every item in an array. Always returns a Promise.
 */
export function asyncMap(...fns: any[]): (arr: any) => Promise<any[]>;
/**
 * Sets a value to an object's property
 */
export function setIn(
  obj: Record<any, any>,
  prop: any
): (val: any) => Record<any, any>;
/**
 * Apply a asynchronous OR synchronous predicate to filter out items in an array. Always returns a Promise.
 */
export function asyncFilter(fn: any): (arr: any[]) => Promise<any[]>;
