(function () {
    "use strict";

    /**
     *
     */
    filtersModule.filter('reverse', function () {
        return function (arr) {
            if (arr !== undefined && (arr instanceof Array)) {
                return arr.slice().reverse();
            }
            return [];
        };
    });
})();
