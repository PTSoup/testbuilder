// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
    var numbers = cardNumber.length;
    var key = Number(cardNumber.slice(0, 2));

    if ([13, 16, 19].includes(numbers) && Number(cardNumber.charAt(0)) === 4) {
      return `Visa`;
    };

    if (numbers === 14 && [38, 39].includes(key)) {
        return `Diner's Club`;
    } else if ([34, 37].includes(key) && numbers === 15) {
        return `American Express`;
    } else if ([51, 52, 53, 54, 55].includes(key) && numbers === 16) {
        return `MasterCard`;
    } else {
        return `Network Not Found`;
    };
};


