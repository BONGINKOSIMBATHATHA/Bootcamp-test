import assert from "assert";
import isFromBellville from "../isFromBellville.js";
describe('isFromBellville', function() {
    it('should return true if the name starts with CY', function() {
      assert.strictEqual(isFromBellville('CY123'), true);
    });
  
    it('should return false if the name does not start with CY', function() {
      assert.strictEqual(isFromBellville('CJ123'), false);
    });
  
    it('should return false for an empty string', function() {
      assert.strictEqual(isFromBellville('CJ 123'), false);
    });
  
    
  });