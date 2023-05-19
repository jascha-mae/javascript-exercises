const removeFromArray = function (numbers, ...args) {
  result = numbers;
  for (let arg of args) {
    result = result.filter((element) => element !== arg);
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
