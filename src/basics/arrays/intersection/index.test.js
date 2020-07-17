const intersection = require("./index");

test("returns the intersection of two arrays", () => {
  expect(intersection([], [])).toEqual([]);
  expect(intersection([], [1, 2, 3])).toEqual([]);
  expect(intersection([1, 2, 3], [])).toEqual([]);
  expect(intersection([1, 8, -4, 3], [2, 1, 4, 3, 5])).toEqual([1, 3]);
});
