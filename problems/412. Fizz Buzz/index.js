/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  if (n < 1 || n > Math.pow(10, 4)) return null;
  const array = [];
  for (let i = 1; i <= n; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 == 0;
    if (isFizz && isBuzz) array.push('FizzBuzz');
    else if(isFizz) array.push('Fizz');
    else if(isBuzz) array.push('Buzz');
    else array.push(i.toString());
  }
  return array;
};

console.log(fizzBuzz(15));