'use strict';

/**
 * Capitalize Filter
 *
 * Example usage: {{ myText | capitalise }}
 *
 * @param {String} input the input string to capitalise
 */
filtersModule.filter('capitalise', function () {
    return function(input) {
        if (input === undefined) {
            return "";
        }
        if (typeof input !== "string") {
            return "";
        }
        return input.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
        });
    };
});
