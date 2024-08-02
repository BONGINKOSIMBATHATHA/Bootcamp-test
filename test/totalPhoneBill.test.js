import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

    describe('totalPhoneBill', function() {
    it('should return R0.00 for an empty string', function() {
      assert.strictEqual(totalPhoneBill(''), 'R0.00');
    });
  
    it('should return R7.45 for "call, sms, call, sms, sms"', function() {
      assert.strictEqual(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });
});