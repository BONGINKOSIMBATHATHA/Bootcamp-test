
import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";
describe('countAllFromTown', function() {
    it('should return 3 for "CL 124,CY 567,CL 345, CJ 456,CL 341" with town "CL"', function() {
      assert.strictEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), 3);
    });
  
    it('should return 1 for "CL 124,CY 567,CL 345, CJ 456,CL 341" with town "CY"', function() {
      assert.strictEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CY'), 1);
    });
});