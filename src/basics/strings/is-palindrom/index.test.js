const isPalindrom = require("./index");

test("checks if a string is a palindrom", () => {
  expect(isPalindrom("c")).toEqual(true);
  expect(isPalindrom("ac")).toEqual(false);
  expect(isPalindrom("aca")).toEqual(true);
  expect(isPalindrom("aa")).toEqual(true);
  expect(isPalindrom("abcdcba")).toEqual(true);
  expect(isPalindrom("abcddcba")).toEqual(true);
  expect(isPalindrom("abddcba")).toEqual(false);
});
