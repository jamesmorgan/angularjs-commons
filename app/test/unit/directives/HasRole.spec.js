'use strict';

describe('Has Role Directive', function(){

    beforeEach(module('myApp.models'));
    beforeEach(module('myApp.directives'));

    // Mock I18nResourceService
    beforeEach(module(function($provide) {
        $provide.factory('I18nResourceService', function() {
            return {
                resources: {
                    "static_data_user_role": [
                                 { "key": "admin",  "value": "Admin" },
                                 { "key": "internal",  "value": "Internal User" },
                                 { "key": "external",  "value": "External User" }
                    ]
                }
            }
        });
    }));

    var $scope, $form, compiledForm, UserModel;

    beforeEach(inject(function($compile, $rootScope, $injector) {
        UserModel = $injector.get('UserModel');
        UserModel.authenticatedUser = { role: "internal" };

        $scope = $rootScope;
        var element = angular.element(
            '<span has-role="admin">My Content</span>'
        );
        compiledForm = $compile(element)($scope);
        $scope.$digest();
        $form = $scope.form;
    }));

    it('Element should be hidden by default when no admin role', function() {
        expect(compiledForm[0].className).toContain('ng-hide');
        expect(compiledForm[0].className).not.toContain('ng-show');
    });

    it('Element should be shown if user has correct role', function() {

        UserModel.authenticatedUser = { role: "admin" };

        compiledForm.scope().$apply();
        expect(compiledForm[0].className).toContain('ng-show');
        expect(compiledForm[0].className).not.toContain('ng-hide');
    });
});

describe('Has Role Directive (Array)', function(){

    beforeEach(module('myApp.models'));
    beforeEach(module('myApp.directives'));

    // Mock I18nResourceService
    beforeEach(module(function($provide) {
        $provide.factory('I18nResourceService', function() {
            return {
                resources: {
                    "static_data_user_role": [
                                 { "key": "admin",  "value": "Admin" },
                                 { "key": "internal",  "value": "Internal User" },
                                 { "key": "external",  "value": "External User" }
                    ]
                }
            }
        });
    }));

    var $scope, $form, compiledForm, UserModel;

    beforeEach(inject(function($compile, $rootScope, $injector) {
        UserModel = $injector.get('UserModel');
        UserModel.authenticatedUser = { role: "external" };

        $scope = $rootScope;
        var element = angular.element(
            '<span has-role="[\'admin\', \'internal\']">My Content</span>'
        );
        compiledForm = $compile(element)($scope);
        $scope.$digest();
        $form = $scope.form;
    }));

    it('Element should be hidden by default when no admin or internal role', function() {
        expect(compiledForm[0].className).toContain('ng-hide');
        expect(compiledForm[0].className).not.toContain('ng-show');
    });

    it('Element should be shown if user has correct role when admin or internal', function() {

        UserModel.authenticatedUser = { role: "admin" };

        compiledForm.scope().$apply();
        expect(compiledForm[0].className).toContain('ng-show');
        expect(compiledForm[0].className).not.toContain('ng-hide');

        UserModel.authenticatedUser = { role: "internal" };

        compiledForm.scope().$apply();
        expect(compiledForm[0].className).toContain('ng-show');
        expect(compiledForm[0].className).not.toContain('ng-hide');


        UserModel.authenticatedUser = { role: "external" };

        compiledForm.scope().$apply();
        expect(compiledForm[0].className).toContain('ng-hide');
        expect(compiledForm[0].className).not.toContain('ng-show');
    });
});




