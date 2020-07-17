const isPrime = require("./index");

test("isPrime()", () => {
  expect(isPrime(0)).toEqual(false);
  expect(isPrime(1)).toEqual(false);
  expect(isPrime(2)).toEqual(true);
  expect(isPrime(4)).toEqual(false);
  expect(isPrime(156844)).toEqual(false);
  expect(isPrime(127)).toEqual(true);
});
