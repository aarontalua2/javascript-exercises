const getTheTitles = function (array) {
  titles = [];

  for (item in array) {
    titles[item] = array[item].title;
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
