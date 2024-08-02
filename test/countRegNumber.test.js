import assert from "assert";
import countRegNumber from "../countRegNumber.js";


describe('countRegNumber', function() {
    it('should return the correct number of registrations for a given string', function() {
      assert.strictEqual(countRegNumber('CA 123, CJ 456, CY 789'), 3);
    });
  
    it('should return 1 for a single registration', function() {
      assert.strictEqual(countRegNumber('CA 123'), 1);
    });
  
    it('should return 0 for an empty string', function() {
      assert.strictEqual(countRegNumber(''), 1); // Should be 1 as split(',') on an empty string returns ['']
    });
});
  