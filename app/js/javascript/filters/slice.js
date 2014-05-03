(function () {
    "use strict";

    /**
     * Slice a provided Array based on start and end options provided
     */
    filtersModule.filter('slice', function () {
        return function (arr, start, end) {
            if (arr !== undefined && (arr instanceof Array)) {
                return arr.slice(start, end);
            }
            return [];
        };
    });
}());
