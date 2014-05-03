'use strict';

describe('ErrorSpan Directive Spec', function () {

    beforeEach(module('myApp.directives'));
    beforeEach(module('myApp.services'));

    // Mock I18nResourceService
    beforeEach(module(function ($provide) {
        $provide.factory('I18nResourceService', function () {
            return {
                resources: { "form_validation_error_required": "Mock Required" }
            };
        });
    }));

    // Run test
    describe('ErrorSpan with default label field', function () {

        var $scope, $form, compiledForm;

        // Set the dom to manipulate
        beforeEach(inject(function ($compile, $rootScope, $injector) {
            $scope = $rootScope;
            var element = angular.element(
                    '<form name="form">' +
                    '<input ng-model="model.field" name="field" required/>' +
                    '<error-span for="form.field" type="required"></error-span>' +
                    '</form>'
            );
            $scope.model = { field: null }
            compiledForm = $compile(element)($scope);
            $scope.$digest();
            $form = $scope.form;
        }));

        it('Show toggle error span visibility when field becomes invalid', function () {

            $form.field.$setViewValue(null);
            compiledForm.scope().$apply();
            expect(compiledForm.find('span').hasClass('ng-hide')).toBe(false);

            $form.field.$setViewValue('valid answer');
            compiledForm.scope().$apply();
            expect(compiledForm.find('span').hasClass('ng-hide')).toBe(true);

            $form.field.$setViewValue(null);
            compiledForm.scope().$apply();
            expect(compiledForm.find('span').hasClass('ng-hide')).toBe(false);

            $form.field.$setViewValue('another valid answer');
            compiledForm.scope().$apply();
            expect(compiledForm.find('span').hasClass('ng-hide')).toBe(true);

            // Confirm Message String falls back on Mock Required
            expect(compiledForm.find('span').contents()[0].data).toBe("Mock Required");
        });
    });

    // Run test
    describe('ErrorSpan with custom label field', function () {

        var $scope, $form, compiledForm;

        // Set the dom to manipulate
        beforeEach(inject(function ($compile, $rootScope, $injector) {
            $scope = $rootScope;
            var element = angular.element(
                    '<form name="form">' +
                    '<input ng-model="model.field" name="field" required/>' +
                    '<error-span for="form.field" type="required" label="Custom Required Field"></error-span>' +
                    '</form>'
            );
            $scope.model = { field: null }
            compiledForm = $compile(element)($scope);
            $scope.$digest();
            $form = $scope.form;
        }));

        it('Show use custom error label when overridden', function () {
            $form.field.$setViewValue(null);
            compiledForm.scope().$apply();
            expect(compiledForm.find('span').hasClass('ng-hide')).toBe(false);

            $form.field.$setViewValue('another valid answer');
            compiledForm.scope().$apply();
            expect(compiledForm.find('span').hasClass('ng-hide')).toBe(true);

            // Confirm Message String falls back on Mock Required
            expect(compiledForm.find('span').contents()[0].data).toBe("Custom Required Field");
        });
    });

    // Run test
    describe('ErrorSpan with error checking', function () {

        // Set the dom to manipulate
        beforeEach(inject(function ($compile, $rootScope, $injector) {
            $scope = $rootScope;
            $log = $injector.get('$log');
            var element = angular.element(
                    '<form name="form">' +
                    '<input ng-model="model.field" name="field" required/>' +
                    '<error-span ></error-span>' +
                    '</form>'
            );
            $compile(element)($scope);
            $scope.$digest();
        }));

        it('Show flag error when no for or type attributes are set', function () {
            expect($log.error.logs[0][0]).toEqual('[type] and [for] attributes must be defined!');
        });
    });

    // Run test
    describe('ErrorSpan with no local found', function () {

        // Override service to ensure error is logged
        beforeEach(module(function ($provide) {
            $provide.factory('I18nResourceService', function () {
                return {
                    resources: {  }
                }
            });
        }));

        var $scope, $form, $log, compiledForm;

        // Set the dom to manipulate
        beforeEach(inject(function ($compile, $rootScope, $injector) {
            $scope = $rootScope;
            $log = $injector.get('$log');
            var element = angular.element(
                    '<form name="form">' +
                    '<input ng-model="model.field" name="field" required/>' +
                    '<error-span for="form.field" type="required"></error-span>' +
                    '</form>'
            );
            $scope.model = { field: null }
            compiledForm = $compile(element)($scope);
            $scope.$digest();
            $form = $scope.form;
        }));

        it('Should log error when no locale found', function () {
            $form.field.$setViewValue(null);
            compiledForm.scope().$apply();
            expect(compiledForm.find('span').hasClass('ng-hide')).toBe(false);

            // The test
            expect($log.error.logs[0][0]).toEqual('No Resource Bundle Found for form.field');
        });
    });

});