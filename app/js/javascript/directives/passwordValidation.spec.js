'use strict';

describe('Password Directive Spec', function () {

    beforeEach(module('myApp.directives'));

    // Run test
    describe('Password validation tests', function () {

        var $scope, $form, compiledForm;

        // Set the dom to manipulate
        beforeEach(inject(function ($compile, $rootScope) {
            $scope = $rootScope;
            var element = angular.element(
                    '<form name="form">' +
                    '<input type="password" ng-model="model.field" name="field" password-validation/>' +
                    '</form>'
            );
            $scope.model = { field: '' }
            compiledForm = $compile(element)($scope);
            $scope.$digest();
            $form = $scope.form;
        }));

//        it('Should be able to set a valid password', function() {
//
//            // Set form value to be VALID
//            $form.field.$setViewValue('Password1');
//
//            // Apply the changes to the scope
//            compiledForm.scope().$apply();
//
//            // Confirm validation flags
//            console.log($form.field.$error);
//            expect($form.field.$error.password).toBe(false);
//
//            // Scope undefined due to failed regex
//            expect($scope.model.field).toBe('Password1');
//
//            // Set form INVALID
//            $form.field.$setViewValue('');
//
//            // Apply the changes to the scope
//            compiledForm.scope().$apply();
//
//            // Confirm set form validation flags
//            expect($form.field.$error.password).toBe(true);
//
//        });

    });

});