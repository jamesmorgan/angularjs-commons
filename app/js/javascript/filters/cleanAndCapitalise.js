(function () {
    "use strict";

    /**
     * Capitalize Filter
     *
     * Example usage: {{ myText | clean_and_capitalise }}
     */
    filtersModule.filter('cleanAndCapitalise', function () {
        return function (input) {
            if (input === undefined) {
                return "";
            }
            if (typeof input !== "string") {
                return "";
            }
            // Strip underscores & Capitalise fully
            return input.replace(/_/g, " ").toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
                return a.toUpperCase();
            });
        };
    });
})();
