import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";


describe('countAllPaarl', function() {
    it('should return 3 for "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"', function() {
      assert.strictEqual(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
    });
  
    it('should return 0 for "CL 123-546, CK 345"', function() {
      assert.strictEqual(countAllPaarl('CL 123-546, CK 345'), 0);
    });
  
    it('should return 1 for "CJ 345 123"', function() {
      assert.strictEqual(countAllPaarl('CJ 345 123'), 1);
    });
});