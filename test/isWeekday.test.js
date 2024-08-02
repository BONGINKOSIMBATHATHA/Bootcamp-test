import assert from 'assert';
import isWeekday from '../isWeekday.js';

describe('Test if the day is weekday', function () {
    it("it should return 'true', when it is a weekday " , function () {
        
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    });
    it ("it should return false,when it called with name that does not start with 'Mon'/'Tue'/'Wed'/'Thur'/'Fri'", function(){
        assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Sunday'), false);
       });
    })