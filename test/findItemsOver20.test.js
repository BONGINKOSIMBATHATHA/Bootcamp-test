import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";


describe('findItemsOver20', function() {
    it('should return items with qty > 20', function() {
        const items = [
            {name: 'apples', qty: 10},
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27},
            {name: 'apples', qty: 3},
        ];
        const result = findItemsOver20(items);
        assert.deepEqual(result, [
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27}
        ]);
    });

    it('should return an empty array if no items have qty > 20', function() {
        const items = [
            {name: 'apples', qty: 10},
            {name: 'pears', qty: 15},
            {name: 'bananas', qty: 18},
            {name: 'apples', qty: 3},
        ];
        const result = findItemsOver20(items);
        assert.deepEqual(result, []);
    });

    it('should return an empty array for an empty input array', function() {
        const items = [];
        const result = findItemsOver20(items);
        assert.deepEqual(result, []);
    });
});
