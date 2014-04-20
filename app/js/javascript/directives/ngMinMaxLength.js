(function () {
    "use strict";

    function isEmpty(value) {
        return angular.isUndefined(value) || value === '' || value === null || value !== value;
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

                scope.$watch(attr.ngMin, function () {
                    ctrl.$setViewValue(ctrl.$viewValue);
                });

                var minValidator = function (value) {
                    if (!isEmpty(value) && value < min) {
                        ctrl.$setValidity('min', false);
                        return undefined;
                    } else {
                        ctrl.$setValidity('min', true);
                        return value;
                    }
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

                scope.$watch(attr.ngMax, function () {
                    ctrl.$setViewValue(ctrl.$viewValue);
                });

                var maxValidator = function (value) {
                    if (!isEmpty(value) && value > max) {
                        ctrl.$setValidity('max', false);
                        return undefined;
                    } else {
                        ctrl.$setValidity('max', true);
                        return value;
                    }
                };

                ctrl.$parsers.push(maxValidator);
                ctrl.$formatters.push(maxValidator);
            }
        };
    });
})();