const sum = require("./index");

test("returns 0 when the array is empty", () => {
  expect(sum([])).toEqual(0);
});

test("returns the sum of numbers in the array", () => {
  expect(sum([0])).toEqual(0);
  expect(sum([1])).toEqual(1);
  expect(sum([1, -1])).toEqual(0);
  expect(sum([1, 2, 3, 4, 5])).toEqual(15);
  expect(sum([1, 1, 1, 1, 1])).toEqual(5);
});
