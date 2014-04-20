(function () {
    "use strict";

    var CURRENCY_REGEXP = /^\d+(\.?\d?\d?)?$/;

    /**
     * This directive validates, sets the view value and sets the model value for a monetary value assuming its in pence and needs displaying in pounds
     * Basic regex validation only
     */
    directivesModule.directive('currencyInPence', function ($log) {
        return {
            restrict: 'A',
            require: '^ngModel',
            link: function (scope, elm, attrs, ctrl) {

                var penceToPound = function (value) {
                    if (value !== undefined) {
                        return (parseFloat(value) / 100).toFixed(2);
                    }
                    return 0;
                };

                var poundsToPence = function (value) {
                    if (value !== undefined) {
                        return (parseFloat(value) * 100).toFixed(0);
                    }
                    return 0;
                };

                ctrl.$parsers.unshift(function (viewValue) {

                    // Validate the viewValue to ensure valid currency
                    if (CURRENCY_REGEXP.test(viewValue)) {
                        // Set to be valid once its passed RegEx
                        ctrl.$setValidity('currency', true);
                        // Convert pounds to pence
                        return poundsToPence(viewValue);
                    }

                    // Handle value being empty
                    if (viewValue === '') {
                        // Set Invalid when blank
                        ctrl.$setValidity('currency', false);
                        // Convert blank string to 0 for consistency
                        return 0;
                    }

                    // Set Validity when invalid
                    ctrl.$setValidity('currency', false);
                    // return undefined (no model update)
                    return undefined;
                });

                // Runs when the model gets updated on the scope directly and keeps our view in sync
                ctrl.$render = function () {
                    elm.val(penceToPound(ctrl.$modelValue));
                };
            }
        };
    });
})();