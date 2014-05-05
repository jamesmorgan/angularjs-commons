'use strict';

describe('To Camel Filter spec', function () {

    beforeEach(module('myApp.filters'));

    // Run test
    it('Should camel case string', inject(function (toCamelFilter) {
        expect(toCamelFilter).toBeDefined();
        expect(toCamelFilter("aNy-oLd-sTrInG")).toEqual("anyOldString");
    }));

});