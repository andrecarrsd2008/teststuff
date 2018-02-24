module.exports = {
    assert: function(expected, actual, message = "Test") {
        if (expected === actual) {
            console.log('  ' + message)
    } else {
      diff - util.inspect(expected) + "\n..." + util.inspect(actual);
      console.log('  ' + message + "\n  Assertion failed no match\n..." + diff);
     }
    },

    assert_true: function(actual, message) {
    },
    assert_false: function(actual, message) {
    }
};

