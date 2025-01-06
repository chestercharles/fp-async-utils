const { expect } = require("chai");
const {
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
} = require("./index");

const addTwo = async (value) => value + 2;
const addTwoSync = (value) => value + 2;
const split = (separator) => (value) => value.split(separator);

describe("fp-async-utils", () => {
  it("asyncPipe", async () => {
    const result = await asyncPipe(1, addTwo, addTwoSync);
    expect(result).to.equal(5);
  });

  it("pipe", async () => {
    const result = await pipe(1, addTwo, addTwoSync);
    expect(result).to.equal(5);
  });

  it("asyncMap", async () => {
    const mapFn1 = asyncMap(addTwo);
    const mapFn2 = asyncMap(addTwoSync);
    const result1 = await mapFn1([1, 2, 3]);
    const result2 = await mapFn2([1, 2, 3]);
    expect(result1[0]).to.equal(3);
    expect(result2[0]).to.equal(3);
    expect(result1[1]).to.equal(4);
    expect(result2[1]).to.equal(4);
    expect(result1[2]).to.equal(5);
    expect(result2[2]).to.equal(5);
  });

  it("map", async () => {
    const mapFn1 = map(addTwo);
    const mapFn2 = map(addTwoSync);
    const result1 = await mapFn1([1, 2, 3]);
    const result2 = await mapFn2([1, 2, 3]);
    expect(result1[0]).to.equal(3);
    expect(result2[0]).to.equal(3);
    expect(result1[1]).to.equal(4);
    expect(result2[1]).to.equal(4);
    expect(result1[2]).to.equal(5);
    expect(result2[2]).to.equal(5);
  });

  it("flatMap", async () => {
    const result = await flatMap(split(", "))(["hello, world", "foo, bar"]);
    expect(result[0]).to.equal("hello");
    expect(result[1]).to.equal("world");
    expect(result[2]).to.equal("foo");
    expect(result[3]).to.equal("bar");
  });

  it("ado", async () => {
    const promiseObj = {
      a: Promise.resolve(1),
      b: Promise.resolve(2),
    };
    const resolvedObj = await ado(promiseObj);
    expect(resolvedObj.a).to.equal(1);
    expect(resolvedObj.b).to.equal(2);
  });

  it("setIn", async () => {
    const obj = { a: 1 };
    const setter1 = setIn(obj, "a");
    const setter2 = setIn(obj, "b");
    expect(setter1(6).a).to.equal(6);
    expect(setter2(6).b).to.equal(6);
  });

  it("asyncFilter", async () => {
    const isEven = async (n) => n % 2 == 0;
    const result = await asyncFilter(isEven)([1, 2, 3]);
    expect(result.length).to.equal(1);
    expect(result[0]).to.equal(2);
  });

  it("filter", async () => {
    const isEven = async (n) => n % 2 == 0;
    const result = await filter(isEven)([1, 2, 3]);
    expect(result.length).to.equal(1);
    expect(result[0]).to.equal(2);
  });

  it("asyncFlow", async () => {
    const fn = asyncFlow(addTwo, addTwoSync);
    expect(typeof fn).to.equal("function");
  });

  it("flow", async () => {
    const fn = flow(addTwo, addTwoSync);
    expect(typeof fn).to.equal("function");
  });
});
