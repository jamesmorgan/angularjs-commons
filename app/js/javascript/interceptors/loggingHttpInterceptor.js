'use strict';

/**
 *  Four available methods of interception:
 *  1) request: function(config)
 *  2) requestError: function (rejection)
 *  3) response: function (response)
 *  4) responseError: function (rejection)
 */
loggingHttpInterceptor.factory("LoggingHttpInterceptor", function ($q, $log) {
    return {
        // Useful for adding timestamps, session headers or modify all requests in some manor
        request: function (config) {
            $log.debug("Http Request, Method [" + config.method + "] URL [" + config.url + "]");
            // Return the config or wrap it in a promise if blank.
            return config || $q.when(config);
        },
        requestError: function (rejection) {
            $log.debug("Http Request Error, rejection [" + rejection + "]");
            // Reject the promise to complete the workflow
            $q.reject(rejection);
        },
        response: function (response) {
            $log.debug("Http Response, response [" + response + "]");
            // Return the response or promise.
            return response || $q.when(response);
        },
        responseError: function (rejection) {
            $log.debug("Http Response Error, status [" + rejection.status + "]");
            // Reject the promise to complete the workflow
            $q.reject(rejection);
        }
    };
});