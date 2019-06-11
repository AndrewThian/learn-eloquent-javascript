const fizzbuzz = require('../fizzbuzz');

const defaultNo = [1, 2, 4, 7];

test('If number divisible by 3 print fizz', () => {
  defaultNo.forEach((num) => {
    expect(fizzbuzz(num * 3)).toEqual('fizz');
  });
});

test('If number divisible by 5 print buzz', () => {
  defaultNo.forEach((num) => {
    expect(fizzbuzz(num * 5)).toEqual('buzz');
  });
});

test('If number has no division return', () => {
  expect(fizzbuzz(13)).toEqual(undefined);
});

test('If number is divisible by 3 and 5 print fizzbuzz', () => {
  expect(fizzbuzz(15)).toEqual('fizzbuzz');
  expect(fizzbuzz(30)).toEqual('fizzbuzz');
  expect(fizzbuzz(45)).toEqual('fizzbuzz');
});
