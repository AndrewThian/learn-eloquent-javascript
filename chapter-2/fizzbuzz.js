const fizzbuzz = (num) => {
  const [fizz, buzz] = [3, 5];
  if (num % (fizz * buzz) === 0) return 'fizzbuzz';
  if (num % fizz === 0) return 'fizz';
  if (num % buzz === 0) return 'buzz';
};

module.exports = fizzbuzz;
