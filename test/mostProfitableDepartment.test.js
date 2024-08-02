import assert from "assert";
import mostProfitableDepartment from "../mostProfitableDepartment.js";
 
 describe('mostProfitableDepartment', function() {
    

    it('should return the first department if sales are tied', function() {
        const salesData = [
            { department: 'hardware', sales: 4500, day: 'Monday' },
            { department: 'outdoor', sales: 1500, day: 'Monday' },
            { department: 'carpentry', sales: 4500, day: 'Monday' },
        ];
        const result = mostProfitableDepartment(salesData);
        assert.equal(result, 'hardware');
    });

   
});
