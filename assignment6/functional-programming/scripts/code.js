const sum = (arr) => {
  return arr.reduce((prev, next) => prev + next, 0);
};

const multiply = (arr) => {
  return arr.reduce((prev, next) => prev * next, 1);
};

const reverse = (str) => {
  let strArray = str.split("");
  return strArray.reduce((prev, next) => next + prev);
};

const filterLongWords = (arr, i) => {
  return arr.filter((item) => item.length > i);
};
