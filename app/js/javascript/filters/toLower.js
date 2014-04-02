
/**
 *
 */
filtersModule.filter('toLower', function () {
    return function(value) {
        if (value !== undefined && (typeof value.toLowerCase === 'function')) {
            return value.toLowerCase();
        }
        return '';
    };
});