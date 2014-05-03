'use strict';

describe('UniqueUsername Directive Spec', function () {

    beforeEach(module('myApp.directives'));

    // Mock User
    beforeEach(module(function ($provide) {
        $provide.factory('UserService', function () {
            return {
                usernameExists: function (y) {
                    return {"result": true};
                }
            }
        });
    }));

    // Run test
    describe('UniqueUsername conversion tests', function () {

        var $scope, $form, compiledForm;

        // Set the dom to manipulate
        beforeEach(inject(function ($compile, $rootScope) {
            $scope = $rootScope;
            var element = angular.element(
                    '<form name="form">' +
                    '<input type="text" ng-model="model.username" name="username" unique-username value=""/>' +
                    '</form>'
            );
            $scope.model = { username: "andy123@andy.com" }
            compiledForm = $compile(element)($scope);
            $scope.$digest();
            $form = $scope.form;
        }));

        // Basic test setup verification
        beforeEach(inject(function ($compile, $rootScope) {
            expect($form.username.$viewValue).toBe("andy123@andy.com")
        }));

        it('Should convert check a username exists', function () {

            // Apply the changes to the scope
            compiledForm.scope().$apply();

        });

    });

});