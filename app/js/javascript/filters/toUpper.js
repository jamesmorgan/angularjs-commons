

filtersModule.filter('toUpper', function () {
    return function(value) {
        if (value !== undefined && (typeof value.toUpperCase === 'function')) {
            return value.toUpperCase();
        }
        return '';
    };
});