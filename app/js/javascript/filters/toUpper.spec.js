'use strict';

describe('To Upper Filter spec', function () {

    beforeEach(module('myApp.filters'));

    // Run test
    it('Should uppercase string', inject(function (toUpperFilter) {
        expect(toUpperFilter).toBeDefined();
        expect(toUpperFilter("Any Old String")).toEqual("ANY OLD STRING");
    }));

});