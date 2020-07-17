const distance = require("./index");

test("computes the difference between two words of the same length", () => {
  expect(distance("c", "c")).toEqual(0);
  expect(distance("ac", "ca")).toEqual(2);
  expect(distance("aca", "aaa")).toEqual(1);
  expect(distance("aa", "xy")).toEqual(2);
});
