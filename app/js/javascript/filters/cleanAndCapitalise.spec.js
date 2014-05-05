'use strict';

describe('Capitalise & Clean Filter spec', function () {

    beforeEach(module('myApp.filters'));

    it('Should clean and capitalise values as expected', inject(function (cleanAndCapitaliseFilter) {
        expect(cleanAndCapitaliseFilter).toBeDefined();

        // Edge cases
        expect(cleanAndCapitaliseFilter("")).toEqual("");
        expect(cleanAndCapitaliseFilter(null)).toEqual("");
        expect(cleanAndCapitaliseFilter(undefined)).toEqual("");

        // Can handle none String inputs
        expect(cleanAndCapitaliseFilter({ some: 'Object' })).toEqual("");

        // Funky strings
        expect(cleanAndCapitaliseFilter("This_Is_Already_Capitalised")).toEqual("This Is Already Capitalised");
        expect(cleanAndCapitaliseFilter("tHiS_sTrInG_iS_nOt_cApiTaliSed")).toEqual("This String Is Not Capitalised");
    }));

});