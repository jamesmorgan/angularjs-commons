
describe('Truncate Filter spec', function() {

    beforeEach(module('myApp.filters'));

    it('Should truncate values as expected', inject(function(truncateFilter) {
        expect(truncateFilter).toBeDefined();
        expect(truncateFilter("some very very long value", 10, "---")).toEqual("some ve---");
        expect(truncateFilter("some very very long value", 10)).toEqual("some ve...");
        expect(truncateFilter("some very very long value", 100)).toEqual("some very very long value");
        expect(truncateFilter("", 100)).toEqual("");
        expect(truncateFilter(null, 100)).toEqual("");
        expect(truncateFilter(undefined, 100)).toEqual("");
    }));

});