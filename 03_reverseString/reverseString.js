const reverseString = function (string) {
  let newString = string.split("");
  let resultString = "";
  for (let i = newString.length - 1; i >= 0; i--) {
    resultString += newString[i];
  }
  return resultString;
};

// Do not edit below this line
module.exports = reverseString;
