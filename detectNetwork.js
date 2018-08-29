// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

    // helper functions
    var nums = cardNumber.length;
    var range = function(start, end) {
        var range = [];
        for (var i = start; i <= end; i++) {
            range.push(i);
        }
        return range;
    };

    var american = [34, 37];
    var mastercard = range(51,55);
    var switc = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
    var visa = [4];
    var diners = [38, 39];
    var discover = range(644, 649).concat([6011, 65]);
    var maestro = [5018, 5020, 5038, 6304];
    var china = range(624, 626).concat(range(6282, 6288)).concat(range(622126, 622925));

    var cardCheck = function(key) {

        
        if (switc.includes(key) && [16, 18, 19].includes(nums)) {
            return `Switch`;
        } else if (Number(key) === 4 && [13, 16, 19].includes(nums)) {
            return `Visa`;
        };


        if (diners.includes(key) && nums === 14) {
            return `Diner's Club`;
        } else if (american.includes(key) && nums === 15) {
            return `American Express`;
        } else if (mastercard.includes(key) && nums === 16) {
            return `MasterCard`;
        } else if (discover.includes(key) && (nums === 16 || nums === 19)) {
            return `Discover`;
        } else if (maestro.includes(key) && (nums <= 12 || nums <= 19)) {
            return `Maestro`;
        } else if (china.includes(key) && (nums <= 16 || nums <= 19)) {
            return 'China UnionPay';
        }


    };

    // check
    var start = Number(cardNumber.slice(0, 2)) === 49 ? 2 : 1;

    for (var i = start; i < nums; i++) {
        var key = Number(cardNumber.slice(0, i));
        if (cardCheck(key)) {
            return cardCheck(key);
        }
    }
    return `No network found`;
};