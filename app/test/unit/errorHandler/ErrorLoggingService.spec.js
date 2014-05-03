'use strict';

describe('ErrorLoggingService', function() {

    beforeEach(module('myApp.exceptionHandler'));

    // Run test
    describe('Error Logging', function(){

        var $log, $httpBackend, $http, ErrorLoggingService;

        var exception = {
            message: "Error Message",
            stack: "Error Stack"
        };
        var cause = "Some Cause";

        beforeEach(inject(function($injector) {
            $log = $injector.get('$log');
            $httpBackend = $injector.get('$httpBackend');
            $http = $injector.get('$http');
            ErrorLoggingService = $injector.get('ErrorLoggingService');
        }));

        afterEach(function() {
             $httpBackend.verifyNoOutstandingExpectation();
             $httpBackend.verifyNoOutstandingRequest();
             $log.reset();
        });

        it('Should handle exception when logging error to backend', function() {
            // Spy and force exception to throw
            spyOn($http, "post").andThrow(new Error("Random Failure"));

            // Attempt to log exception
            ErrorLoggingService.logError(exception, cause);

            // Ensure problem caught and logged
            expect($log.error.logs[0][0]).toEqual("Unable to report client side error: [Error: Random Failure]");
        });

        it('Should log error to backend', function() {

            log = {
                message : exception.message,
                stack : exception.stack,
                cause : cause
            }

            $httpBackend.expectPOST('/error/log', log).respond(200);

            ErrorLoggingService.logError(exception, cause)
            $httpBackend.flush();
        });
    });
});