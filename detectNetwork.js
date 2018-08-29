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

    if (numbers === 14 && [38, 39].includes(key)) {
        return `Diner's Club`;
    } else if (numbers === 15 && [34, 37].includes(key)) {
        return `American Express`;
    } else {
        return `Network Not Found`;
    }
};


