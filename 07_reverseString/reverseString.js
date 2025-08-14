const reverseString = function(str) {

   let split =  str.split("");

   let newString = split.reverse();

   let finalString = newString.join("");

   return finalString;


};

// Do not edit below this line
module.exports = reverseString;
