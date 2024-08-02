
import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('fromWhere', function() {
    it('should return Bellville for registration number starting with CY', function() {
      assert.strictEqual(fromWhere('CY123456'), 'Bellville');
    });
  
    it('should return Paarl for registration number starting with CJ', function() {
      assert.strictEqual(fromWhere('CJ987654'), 'Paarl');
    });
  
    it('should return Cape Town for registration number starting with CA', function() {
      assert.strictEqual(fromWhere('CA246813'), 'Cape Town');
    });
});