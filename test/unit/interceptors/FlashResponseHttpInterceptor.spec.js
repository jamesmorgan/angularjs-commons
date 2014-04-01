
describe('FlashResponseHttpInterceptor', function() {

    var interceptor, flash;

    var HANDLED_STATUSES = [401, 403];

    beforeEach(module('myApp.interceptors'));
    beforeEach(module('angular-flash.service'));

    beforeEach(inject(function($injector, $rootScope) {
        interceptor = $injector.get('FlashResponseHttpInterceptor');
        flash = $injector.get('flash');
    }));

    it('Should not intercept non-401 error responses', function() {
        var httpResponse = {
            status: 200,
            config: {
                url: "/some-api-endpoint",
                method: "POST"
            }
        };
        interceptor.responseError(httpResponse);
        expect(flash.error).toBeUndefined();
    });

    it('Should intercept 401/403 error responses and report via flash message', function() {
        HANDLED_STATUSES.forEach(function(status){
            var notAuthResponse = {
                status: status,
                config: {
                    url: "/some-api-endpoint",
                    method: "POST"
                }
            };
            interceptor.responseError(notAuthResponse);
            expect(flash.error).toBe("User not authenticated to perform action to [/some-api-endpoint] method [POST] status [" + status + "]");
        });
    });

    it('Should intercept 401/403 error responses but ignores if API call is [/authenticated]', function() {
        HANDLED_STATUSES.forEach(function(status){
            var notAuthResponse = {
                status: status,
                config: {
                    url: "/authenticated",
                    method: "POST"
                }
            };
            interceptor.responseError(notAuthResponse);
            expect(flash.error).toBeUndefined();
        });
    });

});