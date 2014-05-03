(function () {
    "use strict";

    /**
     *  Decorate the `$exceptionHandler` providing functionality for logging
     */
    errorHandler.config(function ($provide) {
        $provide.decorator("$exceptionHandler", function ($delegate, TestErrorHandlingService) {
            /**
             * @param {Error} exception Exception associated with the error.
             * @param {string} cause optional information about the context in which the error was thrown.
             */
            return function (exception, cause) {

                // Delegate on the original `$exceptionHandler` i.e. $log.error()
                $delegate(exception, cause);

                // Record the error server side
                TestErrorHandlingService.logError(exception, cause);
            };
        });
    });
}());