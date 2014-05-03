(function () {
    "use strict";

    /**
     * The directive adds the ability to show error spans for a given form field
     *
     * The Directive also follows a convention for displaying errors messages based on a mapping file defined in Config.js
     */
    directivesModule.directive('errorSpan', function ($log, FormErrorMessages) {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            template: '<span class="help-block" ng-show="showError">{{errorMessage}}</span>',
            link: function (scope, element, attrs) {

                // If no label and no mapping resource found log error
                if (undefined === attrs['for'] || undefined === attrs.type) {
                    $log.error("[type] and [for] attributes must be defined!");
                }

                // Return the label from the resource bundle or the attribute
                var getLabel = function () {
                    // Allow the ability to set a custom label if required
                    if (attrs.label) {
                        return attrs.label;
                    }

                    // It is trivial to plugin in a i18n resource loader here.
                    var errorMessage = FormErrorMessages[attrs.type];
                    if (errorMessage !== undefined) {
                        return errorMessage;
                    }

                    // Log error if not found
                    $log.error("No Resource Bundle Found for #{attrs.for}");
                };

                scope.$watch(attrs['for'] + ".$error." + attrs.type + " && !" + attrs['for'] + ".$pristine", function (invalidResult) {
                    scope.showError = invalidResult;
                    // Load the resource bundle
                    if (invalidResult && !scope.errorMessage) {
                        scope.errorMessage = getLabel();
                    }
                });

            }
        };
    });
}());