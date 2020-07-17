const add = require("./index");

test("adds two numbers", () => {
  expect(add(0, 1)).toEqual(1);
  expect(add(1, 5)).toEqual(6);
  expect(add(11, 5.1)).toEqual(16.1);
});
