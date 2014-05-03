(function () {
    "use strict";

    /**
     * Reverses a supplied Array or returns an empty Array if null or undefined
     */
    filtersModule.filter('reverse', function () {
        return function (arr) {
            if (arr !== undefined && (arr instanceof Array)) {
                return arr.slice().reverse();
            }
            return [];
        };
    });
}());
