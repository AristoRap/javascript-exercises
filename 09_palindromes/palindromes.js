const palindromes = function (string) {
  const arr = string.split('')
                    .map(w => w.toLowerCase())
                    .filter(w => /\w/.test(w))

  return arr.join('') === arr.reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
