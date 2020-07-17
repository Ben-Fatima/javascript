const getFactors = require("./index");

test("gets prime factors of a positive integer", () => {
  expect(getFactors(0)).toEqual([0]);
  expect(getFactors(1)).toEqual([1]);
  expect(getFactors(2)).toEqual([2]);
  expect(getFactors(4)).toEqual([2, 2]);
  expect(getFactors(127)).toEqual([127]);
  expect(getFactors(156844)).toEqual([2, 2, 113, 347]);
});
