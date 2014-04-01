
describe('Capitalise Filter spec', function() {

    beforeEach(module('myApp.filters'));

    it('Should capitalise values as expected', inject(function(capitaliseFilter) {
        expect(capitaliseFilter).toBeDefined();

        // Edge cases
        expect(capitaliseFilter("")).toEqual("");
        expect(capitaliseFilter(null)).toEqual("");
        expect(capitaliseFilter(undefined)).toEqual("");

        // Can handle special characters
        expect(capitaliseFilter("_09( )*& ^% $£ @!")).toEqual("_09( )*& ^% $£ @!");

        // Can handle none String inputs
        expect(capitaliseFilter( { some: 'Object' } )).toEqual("");

        // Funky strings
        expect(capitaliseFilter("This Is Already Capitalised")).toEqual("This Is Already Capitalised");
        expect(capitaliseFilter("tHiS sTrInG iS nOt cApiTaliSed")).toEqual("This String Is Not Capitalised");
    }));

});