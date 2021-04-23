const assert = require('chai').assert;
const util = require('../utility');
const cons = require('../constant');

describe('User Registration Testing for Valid Inputs', function(){
    it('Test first name', function(){
        let result = util.test(cons.fnameRegex, 'Saud');
        assert.equal(result, true);
    });

    it('Test last name', function(){
        let result = util.test(cons.lnameRegex, 'Hasan');
        assert.equal(result, true);
    });

    it('Test email', function(){
        let result = util.test(cons.emailRegex, 'saud123@gmail.com');
        assert.equal(result, true);
    });

    it('Test Phone Number', function(){
        let result = util.test(cons.phoneNmberRegex, '91 4596523659');
        assert.equal(result, true);
    });

    it('Test Password', function(){
        let result = util.test(cons.password4Regex, 'Saud@54321');
        assert.equal(result, true);
    });
});

describe('User Registration Testing for Invalid Inputs', function(){
    it('Test first name', function(){
        let result = util.test(cons.fnameRegex, 'saud');
        assert.equal(result, false);
    });

    it('Test last name', function(){
        let result = util.test(cons.lnameRegex, 'hasan');
        assert.equal(result, false);
    });

    it('Test email', function(){
        let result = util.test(cons.emailRegex, 'saud@.@gmail.com');
        assert.equal(result, false);
    });

    it('Test Phone Number', function(){
        let result = util.test(cons.phoneNmberRegex, '91 521452563');
        assert.equal(result, false);
    });

    it('Test Password', function(){
        let result = util.test(cons.password4Regex, 'saud123');
        assert.equal(result, false);
    });
});