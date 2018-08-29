// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
    var nums = cardNumber.length;
    var key = Number(cardNumber.slice(0, 2));

    if ([13, 16, 19].includes(nums) && Number(cardNumber.charAt(0)) === 4) {
        return `Visa`;
    };

    if (nums === 14 && [38, 39].includes(key)) {
        return `Diner's Club`;
    } else if ([34, 37].includes(key) && nums === 15) {
        return `American Express`;
    } else if ([51, 52, 53, 54, 55].includes(key) && nums === 16) {
        return `MasterCard`;
    } else if ([60, 64, 65].includes(key) && (nums === 16 || nums === 19)) {
        return `Discover`;
    } else if ([50, 63].includes(key) && (nums <= 12 || nums <= 19)) {
        return `Maestro`;
    } else {
        return `Network Not Found`;
    };
};

