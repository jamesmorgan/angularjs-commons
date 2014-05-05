'use strict';

describe('Reverse Filter spec', function () {

    beforeEach(module('myApp.filters'));

    // Run test
    it('Should reverse array', inject(function (reverseFilter) {
        expect(reverseFilter).toBeDefined();
        expect(reverseFilter("")).toEqual([]);
        expect(reverseFilter(undefined)).toEqual([]);
        expect(reverseFilter([0, 1, 2, 3])).toEqual([3, 2, 1, 0]);
    }));

});