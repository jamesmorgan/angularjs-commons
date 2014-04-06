'use strict';

/**
 * A mock/test service which is used to demonstrate various aspects of angular and the demonstrated tools
 */
servicesModule.service('TestErrorHandlingService', function ($log, $injector) {

    this.errors = [];

    // Retrieve `$http` as angularJS reports cyclical dependency if constructed with one
    this.http = undefined;

    this.logError = function (exception, cause) {
        try {

            if (this.http === undefined) {
                this.http = $injector.get("$http");
            }

            // Build payload
            var log = {
                message: exception.message,
                stack: exception.stack,
                cause: cause
            };

            // Post error to server
            // this.http.post("/error/log", log);

            // Simply keep a tally for the demonstration
            this.errors.push(log);
        } catch (error) {
            // Be safe catch any problems
            $log.error("Unable to log client side error: [" + error + "]");
        }
    };

});