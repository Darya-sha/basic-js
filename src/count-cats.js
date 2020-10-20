const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = backyard.flat().filter(elem => elem === '^^');
  return cats.length;  // remove line with error and write your code here
};
