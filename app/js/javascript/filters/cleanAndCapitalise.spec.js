'use strict';

describe('Capitalise & Clean Filter spec', function () {

    beforeEach(module('myApp.filters'));

    it('Should clean and capitalise values as expected', inject(function (clean_and_capitaliseFilter) {
        expect(clean_and_capitaliseFilter).toBeDefined();

        // Edge cases
        expect(clean_and_capitaliseFilter("")).toEqual("");
        expect(clean_and_capitaliseFilter(null)).toEqual("");
        expect(clean_and_capitaliseFilter(undefined)).toEqual("");

        // Can handle none String inputs
        expect(clean_and_capitaliseFilter({ some: 'Object' })).toEqual("");

        // Funky strings
        expect(clean_and_capitaliseFilter("This_Is_Already_Capitalised")).toEqual("This Is Already Capitalised");
        expect(clean_and_capitaliseFilter("tHiS_sTrInG_iS_nOt_cApiTaliSed")).toEqual("This String Is Not Capitalised");
    }));

});