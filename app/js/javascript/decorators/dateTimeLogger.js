(function () {
    "use strict";

    /**
     *  Decorate the `$log` providing functionality for logging with datetimes
     */
    dateTimeLogger.config(function ($provide) {
        $provide.decorator("$log", function ($delegate) {

            // Save the original function
            var debugFn = $delegate.debug,
                infoFn = $delegate.info,
                warnFn = $delegate.warn,
                errorFn = $delegate.error;

            /**
             * Enhance log
             *
             * @param logFn the log function to decorate
             * @param args the args of the calling log
             */
            var enhanceLog = function (logFn, args) {
                var now = moment().format('MMMM Do YYYY, h:mm:ss a');

                if (args[0] instanceof Error) {
                    // Handle Errors in a different way to get the stack trace
                    args[0] = "{now} - {log}".supplant({now: now, log: args[0].stack });
                } else {
                    // Prepend timestamp
                    args[0] = "{now} - {log}".supplant({now: now, log: args[0] });
                }

                // Apply the original call with the formatted datetime
                logFn.apply(null, args);
            };

            $delegate.debug = function () {
                var args = [].slice.call(arguments);
                enhanceLog(debugFn, args);
            };

            $delegate.info = function () {
                var args = [].slice.call(arguments);
                enhanceLog(infoFn, args);
            };

            $delegate.warn = function () {
                var args = [].slice.call(arguments);
                enhanceLog(warnFn, args);
            };

            $delegate.error = function () {
                var args = [].slice.call(arguments);
                enhanceLog(errorFn, args);
            };

            return $delegate;
        });
    });
}());