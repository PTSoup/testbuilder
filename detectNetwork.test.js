/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

//helper
var range = function(start, end) {
    var range = [];
    for (var i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
};

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = s + "0"; }
    return s;
}
//

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
    // A Mocha test is just a function!
    // If the function throws an error when run, it fails.
    // If it doesn't throw an error when run, it doesn't fail. 
    // To read more about mocha, visit mochajs.org

    // Once you've read and understood this section, please comment it out. 
    // You will not be able to proceed with a failing test. 

    it('Throws an error so it fails', function() {
        return true;
    });

    it('Doesn\'t throw an error, so it doesn\'t fail', function() {
        // This test doesn't really test anything at all! It will pass no matter what.
        var even = function(num) {
            return num / 2 === 0;
        }
        return even(10) === true;
    });

    // In tests, we want to compare the expected behavior to the actual behavior.
    // A test should only fail if the expected behavior doesn't match the actual.
    it('Throws an error when expected behavior does not match actual behavior', function() {
        var even = function(num) {
            return num % 2 === 0;
        }

        if (even(10) !== true) {
            throw new Error('10 should be even!');
        }
    });
});

describe('Diner\'s Club', function() {
    // Be careful, tests can have bugs too...

    it('has a prefix of 38 and a length of 14', function() {
        if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
            throw new Error('Test failed');
        }
    });

    it('has a prefix of 39 and a length of 14', function() {
        if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
            throw new Error('Test failed');
        }

    });
});

describe('American Express', function() {
    // It can get annoying to keep typing the if/throw, so here is a
    // helper function to throw an error if the input statement isn't true. 
    var assert = function(isTrue) {
        if (isTrue !== true) {
            throw new Error('Test failed');
        }

    };

    it('has a prefix of 34 and a length of 15', function() {
        assert(detectNetwork('343456789012345') === 'American Express');
    });

    it('has a prefix of 37 and a length of 15', function() {
        assert(detectNetwork('373456789012345') === 'American Express');
    });
});

describe('Visa', function() {
    // Chai is an entire library of helper functions for tests!
    // Chai provides an assert that acts the same as our previous assert.
    // Search the documentation to figure out how to access it. 
    //   http://chaijs.com/
    var assert = chai.assert;

    it('has a prefix of 4 and a length of 13', function() {
        assert(detectNetwork('4123456789012'), 'Visa', detectNetwork('4123456789012') === 'Visa');
    });

    it('has a prefix of 4 and a length of 16', function() {
        assert(detectNetwork('4123456789012345'), 'Visa', detectNetwork('4123456789012345') === 'Visa');
    });

    it('has a prefix of 4 and a length of 19', function() {
        assert(detectNetwork('4123456789012345678'), 'Visa', detectNetwork('4123456789012345678') === 'Visa');
    });
});

describe('MasterCard', function() {
    var expect = chai.expect;

    for (var prefix = 51; prefix <= 55; prefix++) {
        (function(prefix) {
            it('has a prefix of ' + prefix + ' and a length of 16', function() {
                expect(detectNetwork(prefix + '12345678901234')).to.equal('MasterCard');
            });
        })(prefix)
    };

});

describe('Discover', function() {
    // Tests without a function will be marked as "pending" and not run
    // Implement these tests (and others) and make them pass!

    var expect = chai.expect;

    it('has a prefix of 6011 and a length of 16', function() {
        expect(detectNetwork('6011012345678912')).to.equal('Discover');
    });

    it('has a prefix of 6011 and a length of 19', function() {
        expect(detectNetwork('6011012345678912345')).to.equal('Discover');
    });

    for (var prefix = 644; prefix <= 649; prefix++) {
        (function(prefix) {
            it('has a prefix of ' + prefix + ' and a length of 16 ', function() {
                expect(detectNetwork((prefix + '1012345678912').toString())).to.equal('Discover');
            });
            it('has a prefix of ' + prefix + ' and a length of 19 ', function() {
                expect(detectNetwork((prefix + '1012345678912345').toString())).to.equal('Discover');
            });
        })(prefix)
    };

    it('has a prefix of 65 and a length of 16', function() {
        expect(detectNetwork('6561012345678912')).to.equal('Discover');
    });

    it('has a prefix of 65 and a length of 19', function() {
        expect(detectNetwork('6561012345678912345')).to.equal('Discover');
    });

});


describe('Maestro', function() {
    var expect = chai.expect;
    var prefixes = [5018, 5020, 5038, 6304];

    prefixes.forEach(function(prefix) {
        (function(prefix) {
            it('has a prefix of ' + prefix + ' and a length of 12', function() {
                expect(detectNetwork(prefix.pad(12))).to.equal('Maestro');
            });

            it('has a prefix of ' + prefix + ' and a length of 13', function() {
                expect(detectNetwork(prefix.pad(13))).to.equal('Maestro');
            });

            it('has a prefix of ' + prefix + ' and a length of 14', function() {
                expect(detectNetwork(prefix.pad(14))).to.equal('Maestro');
            });

            it('has a prefix of ' + prefix + ' and a length of 15', function() {
                expect(detectNetwork(prefix.pad(15))).to.equal('Maestro');
            });

            it('has a prefix of ' + prefix + ' and a length of 16', function() {
                expect(detectNetwork(prefix.pad(16))).to.equal('Maestro');
            });

            it('has a prefix of ' + prefix + ' and a length of 17', function() {
                expect(detectNetwork(prefix.pad(17))).to.equal('Maestro');
            });

            it('has a prefix of ' + prefix + ' and a length of 18', function() {
                expect(detectNetwork(prefix.pad(18))).to.equal('Maestro');
            });

            it('has a prefix of ' + prefix + ' and a length of 19', function() {
                expect(detectNetwork(prefix.pad(19))).to.equal('Maestro');
            });
        })(prefix)
    })
});

describe('China UnionPay', function() {
    var expect = chai.expect;

    for (prefix = 624; prefix <= 626; prefix++) {
        var prefixLength = prefix.toString().length;

        (function(prefix) {
            it('has a prefix of ' + prefix + ' and a length of 16', function() {
                expect(detectNetwork(prefix.pad(16))).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix + ' and a length of 17', function() {
                expect(detectNetwork(prefix.pad(17))).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix + ' and a length of 18', function() {
                expect(detectNetwork(prefix.pad(18))).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix + ' and a length of 19', function() {
                expect(detectNetwork(prefix.pad(19))).to.equal('China UnionPay');
            });
        })(prefix)
    }

    for (prefix = 6282; prefix <= 6288; prefix++) {
        var prefixLength = prefix.toString().length;

        (function(prefix) {
            it('has a prefix of ' + prefix + ' and a length of 16', function() {
                expect(detectNetwork(prefix.pad(16))).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix + ' and a length of 17', function() {
                expect(detectNetwork(prefix.pad(17))).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix + ' and a length of 18', function() {
                expect(detectNetwork(prefix.pad(18))).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix + ' and a length of 19', function() {
                expect(detectNetwork(prefix.pad(19))).to.equal('China UnionPay');
            });
        })(prefix)
    }

    for (prefix = 622126; prefix <= 622925; prefix++) {
        var prefixLength = prefix.toString().length;

        (function(prefix) {
            it('has a prefix of ' + prefix + ' and a length of 16', function() {
                expect(detectNetwork(prefix.pad(16))).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix + ' and a length of 17', function() {
                expect(detectNetwork(prefix.pad(17))).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix + ' and a length of 18', function() {
                expect(detectNetwork(prefix.pad(18))).to.equal('China UnionPay');
            });
            it('has a prefix of ' + prefix + ' and a length of 19', function() {
                expect(detectNetwork(prefix.pad(19))).to.equal('China UnionPay');
            });
        })(prefix)
    }
});

describe('Switch', function() {
    var expect = chai.expect;
    var prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];

    prefixes.forEach(function(prefix) {
        (function(prefix) {

            it('has a prefix of ' + prefix + ' and a length of 16', function() {
                expect(detectNetwork(prefix.pad(16))).to.equal('Switch');
            });

            it('has a prefix of ' + prefix + ' and a length of 18', function() {
                expect(detectNetwork(prefix.pad(18))).to.equal('Switch');
            });

            it('has a prefix of ' + prefix + ' and a length of 19', function() {
                expect(detectNetwork(prefix.pad(19))).to.equal('Switch');
            });
        })(prefix)
    })
});