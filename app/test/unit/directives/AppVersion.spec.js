describe('AppVersion Directive Spec', function() {

    beforeEach(module('myApp.directives'));
    beforeEach(module('myApp.common'));

    // Run test
    describe('AppVersion', function(){

        var $scope, compiledForm;

        // Set the dom to manipulate
        beforeEach(inject(function($compile, $rootScope) {
            $scope = $rootScope;
            var element = angular.element('<span app-version></span>');
            compiledForm = $compile(element)($scope);
            $scope.$digest();
        }));

        it('Should output correct version from common module', function() {

            // Check compiled element has correct version
            expect(compiledForm[0].innerHTML).toBe("Iteration 4");
        });
    });

});