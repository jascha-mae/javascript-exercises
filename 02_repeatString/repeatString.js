const repeatString = function (string, num) {
  let resultString = "";
  if (num < 0) {
    resultString = "ERROR";
  }
  for (let i = 0; i < num; i++) {
    resultString += string;
  }
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
