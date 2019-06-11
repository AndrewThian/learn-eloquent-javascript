const chessboard = require('../chessboard');

const even = '# # \n';
const odd = ' # #\n';

test('If provided with a number should create horizontal row with a new line', () => {
  expect(chessboard.horizontal(4)).toEqual(even);
});

test('If passed a even row, should create a row with symbol first', () => {
  expect(chessboard.horizontal(4, 0)).toEqual(even);
});

test('If passed a odd row, should create a row with symbol first', () => {
  expect(chessboard.horizontal(4, 1)).toEqual(odd);
});

test('If no arguments passed into board return array of empty strings', () => {
  expect(chessboard.board()).toEqual(['']);
});

test('If provided with number return array of horizontal board strings', () => {
  chessboard.board(4).forEach((row, idx) => {
    if (idx === 0) expect(row).toEqual(even);
    if (idx === 1) expect(row).toEqual(odd);
  });
});

test('If provided with num return string of chess board', () => {
  expect(chessboard.print(4)).toEqual(even + odd + even + odd);
});
