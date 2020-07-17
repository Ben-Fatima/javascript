const stats = require("./index");

test("returns the min, max and average of numbers in the array", () => {
  expect(stats([0])).toEqual({ min: 0, max: 0, average: 0 });
  expect(stats([1, -1])).toEqual({ min: -1, max: 1, average: 0 });
  expect(stats([1, 2, 3, 4, 5])).toEqual({ min: 1, max: 5, average: 3 });
});
