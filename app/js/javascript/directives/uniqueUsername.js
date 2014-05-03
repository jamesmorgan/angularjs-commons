(function () {
    "use strict";

    /**
     * Used to demonstrate username validation
     */
    directivesModule.directive('uniqueUsername', function ($log, UserService) {
        return {
            restrict: 'A',
            require: '^ngModel',
            link: function (scope, elm, attrs, ctrl) {

                var validationFunction = function (value) {
                    UserService.checkUniqueUsername(value)
                        .then(function (result) {
                            ctrl.$setValidity('unique_username', result);
                        });
                };

                if (ctrl.$modelValue) {
                    validationFunction(ctrl.$modelValue);
                }

                elm.bind('keyup', function () {
                    validationFunction(ctrl.$modelValue);
                });
            }
        };
    });
}());