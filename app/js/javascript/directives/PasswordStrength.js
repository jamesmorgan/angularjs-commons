'use strict';

/**
 * Validates a password field, to ensure more then 7 chars and contain at least one non alphabetic character.
 */
directivesModule.directive('passwordStrength', function ($log, $filter) {
    return {
        restrict: 'A',
        require: '^ngModel',
        link: function (scope, elm, attrs, ctrl) {

            var containsOneUpper = function (viewValue) {
                    return /(?=.*[A-Z])/.test(viewValue);
                },
                containsOneNumber = function (viewValue) {
                    return /(?=.*\d)/.test(viewValue);
                };

            ctrl.$parsers.unshift(function (viewValue) {

                var atLeastOneUpperCase = containsOneUpper(viewValue),
                    atLeastOneNumber    = containsOneNumber(viewValue);

                if (atLeastOneUpperCase && atLeastOneNumber) {
                    ctrl.$setValidity('password_strength', true);
                    return viewValue;
                }

                ctrl.$setValidity('password_strength', false);
                return undefined;
            });

            // Runs when the model gets updated on the scope directly and keeps our view in sync
            ctrl.$render = function () {
                elm.val(ctrl.$modelValue);
            };
        }
    };
});