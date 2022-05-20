const removeFromArray = function(arr) {
  for (let i = 1; i < arguments.length; i++) {
    let index = arr.indexOf(arguments[i]);
    index !== -1 ? arr.splice(index, 1) : null
  }
  return arr
};

// Do not edit below this line
module.exports = removeFromArray;
