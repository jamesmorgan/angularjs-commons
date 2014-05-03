(function () {
    "use strict";

    /**
     * This directive shows and hides a asterisk (*) depending on if an element is required and valid
     *
     * Example Usage:
     *  Single field checks : is-required="form.field1"
     *  Multi field checks  : is-required="['form.field1','form.field2']"
     */
    directivesModule.directive('isRequired', function ($log) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                var elementText = element[0].innerHTML;
                var formAttributesToWatch = attrs.isRequired.match(/\[(.*?)\]/) ? eval(attrs.isRequired) : [attrs.isRequired];

                // Basic error checking
                if (elementText === undefined || elementText === null || elementText.length == 0) {
                    $log.debug("IsRequired : No label value found for " + attrs.isRequired);
                }

                var fieldValidationString = "";

                angular.forEach(formAttributesToWatch, function (value, i) {
                    var computationValue = value + ".$invalid && " + value + ".$error.required";
                    fieldValidationString += i < formAttributesToWatch.length - 1 ? computationValue + ", " : computationValue;
                });

                scope.$watchCollection("[" + fieldValidationString + "]", function (resultValues) {
                    if (resultValues.indexOf(true) === -1) {
                        element.empty();
                        element.append(elementText);
                    } else {
                        element.empty();
                        element.append(elementText + " *");
                    }
                });
            }
        };
    });
}());