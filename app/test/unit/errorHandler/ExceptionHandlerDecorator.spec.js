describe('$exceptionHandler', function() {

    beforeEach(module('myApp.exceptionHandler'));

    // Setup an test controller
    function TestOnlyCtrl($exceptionHandler) {

        // Trigger a reported error
        $exceptionHandler("Some Random Error")
    }

    describe('$exceptionHandler delegation', function(){

        var $httpBackend, $controller, ErrorLoggingService;

        beforeEach(module(function($exceptionHandlerProvider) {
            $exceptionHandlerProvider.mode("log");
        }));

        beforeEach(inject(function($injector) {
            $httpBackend = $injector.get('$httpBackend');

            ErrorLoggingService = $injector.get('ErrorLoggingService');
            spyOn(ErrorLoggingService, "logError").andCallThrough();
        }));

        afterEach(function() {
             $httpBackend.verifyNoOutstandingExpectation();
             $httpBackend.verifyNoOutstandingRequest();
        });

        it('Should delegate on to ErrorLoggingService when error found', inject(function($controller) {
            $httpBackend.expectPOST('/error/log').respond(200);

            // Initiate the controller -> this will trigger an error
            $controller(TestOnlyCtrl)

            $httpBackend.flush();

            expect(ErrorLoggingService.logError).toHaveBeenCalledWith('Some Random Error', undefined);
        }));
    });
});