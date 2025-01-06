/**
 * Compose a function from a series of other functions applied left-to-right
 */
const flow =
  (...fns) =>
  (input) =>
    fns.reduce(
      (chain, func) => chain.then(async (...args) => func(...args)),
      Promise.resolve(input)
    );

/**
 * Compose a function from a series of other functions applied left-to-right. Alias for `flow`.
 */
const asyncFlow = flow.bind({});

/**
 * Apply a series of asynchronous OR synchronous functions to an input. Always returns a Promise. Alias for `pipe`.
 */
const asyncPipe = (input, ...fns) => asyncFlow(...fns)(input);

/**
 * Apply a series of asynchronous OR synchronous functions to an input. Always returns a Promise.
 */
const pipe = asyncPipe.bind({});

/**
 * Apply an asynchronous OR synchronous function to every item in an array. Always returns a Promise.
 */
const map = (fn) => (arr) =>
  Promise.all(arr.map(async (itm) => asyncPipe(itm, fn)));

/**
 * Apply an asynchronous OR synchronous function to every item in an array and flatten the result. Always returns a Promise.
 */
const flatMap = (fn) => (arr) => map(fn)(arr).then((results) => results.flat());

/**
 * Apply an asynchronous OR synchronous function to every item in an array. Always returns a Promise. Alias for `map`.
 */
const asyncMap = map.bind({});

/**
 * Apply a asynchronous OR synchronous predicate to filter out items in an array. Always returns a Promise. Alias for `filter`.
 **/

const filter = (fn) => (arr) =>
  Promise.all(arr.map(fn)).then((results) => arr.filter((v, i) => results[i]));

/**
 * Apply a asynchronous OR synchronous predicate to filter out items in an array. Always returns a Promise.
 */
const asyncFilter = filter.bind({});

/**
 * Sets a value to an object's property
 */
const setIn = (obj, prop) => (val) => ({ ...obj, [prop]: val });

/**
 * Applicative Do: Takes an object where each key value is a promise and returns an
 * object with the same keys where each value is the resolution of the promise.
 */
const ado = async (promiseObject) => {
  const originalKeys = Object.keys(promiseObject);
  const promises = Object.values(promiseObject);
  const resolutions = await Promise.all(promises);
  return originalKeys.reduce((returnObj, key, keyIndex) => {
    return {
      ...returnObj,
      [key]: resolutions[keyIndex],
    };
  }, {});
};

module.exports = {
  ado,
  asyncFlow,
  flow,
  asyncPipe,
  pipe,
  asyncMap,
  map,
  flatMap,
  setIn,
  asyncFilter,
  filter,
};
