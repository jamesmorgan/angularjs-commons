(function () {
    "use strict";

    /**
     *
     */
    filtersModule.filter('slice', function () {
        return function (arr, start, end) {
            if (arr !== undefined && (arr instanceof Array)) {
                return arr.slice(start, end);
            }
            return [];
        };
    });
})();
