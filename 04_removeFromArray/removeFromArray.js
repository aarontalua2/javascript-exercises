// const removeFromArray = function (array, ...args) {
//   for (let arg of args) {
//     if (array.includes(arg)) {
//       index = array.indexOf(arg);
//       array.splice(index, 1);
//     } else {
//       continue;
//     }
//   }
//   return array;
// };

// Peeked from solution, and this is actually a whole lot easier - with an easier approach as well.
// --Create empty array then append it if it's not in the arguments.

const removeFromArray = function (array, ...args) {
  const newArray = [];

  //   item is a variable and can be changed to any valid variable.
  //   Like the "i" in [for i in range(1,10)] in python.
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
