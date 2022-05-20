const findTheOldest = function(arr) {
  const currYear = (new Date).getFullYear();
  arr.sort((a, b) => {
    ageA = (a.yearOfDeath || currYear) - a.yearOfBirth
    ageB = (b.yearOfDeath || currYear) - b.yearOfBirth
    return ageA < ageB ? 1 : -1
  })
  return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
