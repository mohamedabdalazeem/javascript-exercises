const reverseString = function(string) {
stringArray = string.split("");
let reverseArray = stringArray.reverse();
let reversedString = reverseArray.join('');

return reversedString; 
};

// Do not edit below this line
module.exports = reverseString;
