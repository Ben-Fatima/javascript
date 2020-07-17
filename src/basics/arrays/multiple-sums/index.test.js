const sums = require("./index");

test("returns the sums of lists", () => {
  expect(sums([])).toEqual([]);
  expect(sums([[]])).toEqual([0]);
  expect(sums([[], [1], [1, -2, 1]])).toEqual([0, 1, 0]);
  expect(sums([[1, -7, -8, 0, 2, 3], [1, 2, 3], []])).toEqual([-9, 6, 0]);
});
