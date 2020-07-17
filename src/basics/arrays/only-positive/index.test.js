const onlyPositive = require("./index");

test("returns the list of positive numbers", () => {
  expect(onlyPositive([])).toEqual([]);
  expect(onlyPositive([0, 1])).toEqual([0, 1]);
  expect(onlyPositive([-5, -1])).toEqual([]);
  expect(onlyPositive([1, -7, -8, 0, 2, 3])).toEqual([1, 0, 2, 3]);
});
