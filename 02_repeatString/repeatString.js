const repeatString = (word, times) => {
  if (times < 0) return "ERROR";
  let processed = '';
  for (let i = 1; i <= times; i++) {
    processed += word
  }
  return processed
};

// Do not edit below this line
module.exports = repeatString;
