'use strict';

/**
 * Validates a password field, to ensure more then 7 chars and contain at least one non alphabetic character.
 */
directivesModule.directive('characterCount', function ($log) {
    return {
        restrict: 'E',
        replace:  true,
        scope: true,
        template: '<sub>{{remainingCount}} {{message}}</sub>',
        link: function (scope, elm, attrs) {

            if (attrs.count === undefined) {
                $log.error("No length attribute specified");
            }
            if (attrs.field === undefined) {
                $log.error("No field attribute specified");
            }

            scope.$watch(attrs.field, function (newValue, oldValue) {
                // The model value is now invalid
                if (newValue !== undefined && oldValue === undefined) {
                    scope.remainingCount = 0;
                    scope.message = "characters left";
                // The model value is valid
                } else if (newValue !== undefined) {
                    scope.remainingCount    = (newValue.length >= attrs.count) ? 0 : (attrs.count - newValue.length);
                    scope.message           = ((attrs.count - newValue.length) === 1) ? 'character left' : 'characters left';
                    // Default we don't have a model value yet
                } else {
                    scope.remainingCount = attrs.count;
                    scope.message = "characters left";
                }
            });
        }
    };
});