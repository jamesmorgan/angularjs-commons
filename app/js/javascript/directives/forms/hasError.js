(function () {
    "use strict";

    /**
     * This simple directive replaces some of the duplication required for adding and removing errors classes to elements
     *
     * Example Usage:
     * 1) Single field checks : has-error="formCtrl.field"
     * 2) Multi field checks  : has-error="['formCtrl.field1','formCtrl.field2']"
     */
    directivesModule.directive('hasError', function ($log) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                // Basic error checking
                if (attrs.hasError === undefined || attrs.hasError === null || attrs.hasError === '') {
                    $log.debug("Has Error is not defined correctly!");
                }

                var formAttributesToWatch = attrs.hasError.match(/\[(.*?)\]/) ? eval(attrs.hasError) : [attrs.hasError];

                var fieldValidationString = "";

                angular.forEach(formAttributesToWatch, function (value, i) {
                    var computationValue = value + ".$invalid && !" + value + ".$pristine";
                    fieldValidationString += i < formAttributesToWatch.length - 1 ? computationValue + ", " : computationValue;
                });

                $log.debug("Watching collection : [" + fieldValidationString + " ]");

                scope.$watchCollection("[" + fieldValidationString + "]", function (resultValues) {
                    if (resultValues.indexOf(true) === -1) {
                        element.removeClass("has-error");
                    } else {
                        element.addClass("has-error");
                    }
                });
            }
        };
    });
})();