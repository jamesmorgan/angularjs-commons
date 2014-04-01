'use strict';

/**
 * Truncate Filter
 *
 * @param {String} text the text to truncate
 * @param {Number} length the length to truncate to
 * @param {String} end, default is "..."
 *
 * Example usage: {{ myText |truncate:25:"..."}} ("..." is optional since its the default)
 */
filtersModule.filter('truncate', function () {
    return function(text, length, end) {
        end = end || "...";
        if (text === undefined) {
            return "";
        }
        if (text.length <= length || (text.length - end.length <= length)) {
            return text;
        }
        return text.substring(0, length - end.length) + end;
    };
});
