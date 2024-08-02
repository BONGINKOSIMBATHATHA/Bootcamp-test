
import assert from "assert";
import findItemsOver from "../findItemsOver.js";

describe('findItemsOver', function() {
    it('should return items with qty > specified number', function() {
        const items = [
            {name: 'apples', qty: 10},
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27},
            {name: 'apples', qty: 3},
        ];
        const result = findItemsOver(items, 5);
        assert.deepEqual(result, [
            {name: 'apples', qty: 10},
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27}
        ]);
    });

    it('should return an empty array if no items have qty > specified number', function() {
        const items = [
            {name: 'apples', qty: 10},
            {name: 'pears', qty: 15},
            {name: 'bananas', qty: 18},
            {name: 'apples', qty: 3},
        ];
        const result = findItemsOver(items, 30);
        assert.deepEqual(result, []);
    });

    it('should return an empty array for an empty input array', function() {
        const items = [];
        const result = findItemsOver(items, 5);
        assert.deepEqual(result, []);
    });
});