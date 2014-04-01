
###
 * Custom service for logging errors over `$http`
###
class ErrorLoggingService

    constructor: (@$log, @$injector) ->
        @$log.debug "constructing ErrorLoggingService"

    logError:(exception, cause) ->
        try
            # Retrieve `$http` as angularJS reports cyclical dependency if constructed with one
            @http = @$injector.get("$http")

            # Build payload
            log = {
                message : exception.message,
                stack : exception.stack,
                cause : cause
            }

            # Post error to server
            @http.post("/error/log", log)

        catch error
            @$log.error "Unable to report client side error: [#{error}]"

errorhandler.service('ErrorLoggingService', ErrorLoggingService)

###
* Decorate the `$exceptionHandler` providing functionality for logging
###
errorhandler.config(($provide) ->
    $provide.decorator("$exceptionHandler", ($delegate, ErrorLoggingService) ->
        ###
         * @param {Error} exception Exception associated with the error.
         * @param {string} cause optional information about the context in which the error was thrown.
        ###
        (exception, cause) ->

            # Delegate on the original `$exceptionHandler` i.e. $log.error()
            $delegate(exception, cause)

            # Record the error server side
            ErrorLoggingService.logError(exception, cause)
    )
)