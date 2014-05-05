'use strict';

describe('To Lower Filter spec', function () {

    beforeEach(module('myApp.filters'));

    // Run test
    it('Should lowercase string', inject(function (toLowerFilter) {
        expect(toLowerFilter).toBeDefined();
        expect(toLowerFilter("Any Old String")).toEqual("any old string");
    }));

});