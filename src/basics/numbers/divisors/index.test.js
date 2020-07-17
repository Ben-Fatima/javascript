const getDivisors = require("./index");

test("gets positive divisors of an integer", () => {
  expect(getDivisors(1)).toIncludeSameMembers([1]);
  expect(getDivisors(2)).toIncludeSameMembers([1, 2]);
  expect(getDivisors(4)).toIncludeSameMembers([1, 2, 4]);
  expect(getDivisors(123456789)).toIncludeSameMembers([
    1,
    3,
    9,
    3607,
    3803,
    10821,
    11409,
    32463,
    34227,
    13717421,
    41152263,
    123456789,
  ]);
  expect(getDivisors(127)).toIncludeSameMembers([1, 127]);
});
