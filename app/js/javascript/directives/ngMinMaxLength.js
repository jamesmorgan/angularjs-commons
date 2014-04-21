(function () {
    "use strict";

    /**
     * Check value is present
     *
     * @param value the value to check
     * @returns {boolean} true if the value is present
     */
    function hasValue(value) {
        return value !== undefined && value !== '' && value !== null;
    }

    /**
     *
     */
    directivesModule.directive('ngMin', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attr, ctrl) {

                var min = scope.$eval(attr.ngMin) || 0;

                var minValidator = function (value) {
                    if (hasValue(value) && value < min) {
                        ctrl.$setValidity('min', false);
                        return undefined;
                    }
                    ctrl.$setValidity('min', true);
                    return value;
                };
                ctrl.$parsers.push(minValidator);
                ctrl.$formatters.push(minValidator);
            }
        };
    });

    /**
     *
     */
    directivesModule.directive('ngMax', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attr, ctrl) {

                var max = scope.$eval(attr.ngMax) || Infinity;

                var maxValidator = function (value) {
                    if (hasValue(value) && value > max) {
                        ctrl.$setValidity('max', false);
                        return undefined;
                    }
                    ctrl.$setValidity('max', true);
                    return value;
                };
                ctrl.$parsers.push(maxValidator);
                ctrl.$formatters.push(maxValidator);
            }
        };
    });
})();