const Stack = require("./Stack");

test("Stack data structure", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.pop()).toEqual(3);
  expect(s.peek()).toEqual(2);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
  expect(s.pop()).toEqual(undefined);
  expect(s.peek()).toEqual(undefined);
});
