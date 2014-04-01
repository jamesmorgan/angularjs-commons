
describe('Slice Filter spec', function() {

    beforeEach(module('myApp.filters'));

    // Run test
    it('Should return slice', inject(function(sliceFilter) {
        expect(sliceFilter).toBeDefined();
        expect(sliceFilter([], 0, 0)).toEqual([]);
        expect(sliceFilter(['a', 'b', 'c'], 0, 1)).toEqual(['a']);
        expect(sliceFilter(['a', 'b', 'c'], 0, 2)).toEqual(['a', 'b']);
        expect(sliceFilter(['a', 'b', 'c'], 0, 3)).toEqual(['a', 'b', 'c']);
        expect(sliceFilter(['a', 'b', 'c'], 1, 2)).toEqual(['b']);
        expect(sliceFilter(['a', 'b', 'c'], 0, 12)).toEqual(['a', 'b', 'c']);
        expect(sliceFilter(['a', 'b', 'c'], 2, 3)).toEqual(['c']);
        expect(sliceFilter(['a', 'b', 'c'], -4, 12)).toEqual(['a', 'b', 'c']);
    }));

});