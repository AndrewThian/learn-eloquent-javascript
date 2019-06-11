const _ = require('lodash');

const chessboard = {
  horizontal: (num, row = 0) => {
    const strArr = [];
    let symbol = row % 2 === 0 ? '#' : ' ';
    const mapping = {
      '#': ' ',
      ' ': '#',
    };

    for (let i = 0; i < num - 1; i++) {
      if (i === 0) strArr.push(symbol);
      strArr.push(mapping[symbol]);
      symbol = mapping[symbol];
    }
    return strArr.join('') + '\n';
  },
  board: (num) => {
    if (!num) return [''];
    return _.range(0, num).map((n) => {
      return chessboard.horizontal(num, n);
    });
  },
  print: (num) => {
    return chessboard.board(num).join('');
  },
};

module.exports = chessboard;
