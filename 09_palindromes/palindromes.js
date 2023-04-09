const palindromes = function (word) {
  const valid = [..."abcdefghijklmnopqrstuvwxyz1234567890"];
  lower = word.toLowerCase();

  original = [];
  reversed = [];

  //getting original word, excluding punctuations and spaces
  for (char of lower) {
    if (valid.includes(char)) {
      original += char;
    }
  }

  // getting reversed word
  for (i = original.length; i > 0; i--) {
    reversed += original[i - 1];
  }

  //checking if word and reversed word are equal
  return original == reversed ? true : false;
};

palindromes("asd , 123");
// Do not edit below this line
module.exports = palindromes;
