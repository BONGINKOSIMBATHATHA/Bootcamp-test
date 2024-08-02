import assert from "assert";
import yearsAgo from "../yearsAgo.js";



describe('yearsAgo', function() {
    it('should return the correct number of years ago for 1990', function() {
      const currentYear = new Date().getFullYear();
      assert.strictEqual(yearsAgo(1990), currentYear - 1990);
    });
  
    it('should return the correct number of years ago for 2000', function() {
      const currentYear = new Date().getFullYear();
      assert.strictEqual(yearsAgo(2000), currentYear - 2000);
    });
  
    it('should return 0 for the current year', function() {
      const currentYear = new Date().getFullYear();
      assert.strictEqual(yearsAgo(currentYear), 0);
    });
});
  