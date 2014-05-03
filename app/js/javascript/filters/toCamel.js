(function () {
    "use strict";

    /**
     * Camel cases the provided string
     */
    filtersModule.filter('toCamel', function () {
        return function (value) {
            if (value !== undefined && (typeof value.toLowerCase === 'function' && typeof value.toUpperCase === 'function')) {
                return value.toLowerCase().replace(/-(.)/g, function (match, group1) {
                    return group1.toUpperCase();
                });
            }
            return '';
        };
    });
}());
