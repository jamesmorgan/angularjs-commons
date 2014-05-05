(function () {
    "use strict";

    /**
     *
     */
    controllersModule.controller('MainCtrl', ['$log', 'UserService', 'TestErrorHandlingService', 'TestHttpService',
        function ($log, UserService, TestErrorHandlingService, TestHttpService) {

            /***********
             * Filters *
             ***********/

                //noinspection JSUnusedGlobalSymbols
            this.capitalised = { value: 'aNy oLD sTrInG'};
            //noinspection JSUnusedGlobalSymbols
            this.truncate = { value: 'Any Old String'};
            //noinspection JSUnusedGlobalSymbols
            this.toLower = { value: 'Any Old String'};
            //noinspection JSUnusedGlobalSymbols
            this.toUpper = { value: 'Any Old String'};
            //noinspection JSUnusedGlobalSymbols
            this.toCamel = { value: 'aNy-oLd-sTrInG'};
            //noinspection JSUnusedGlobalSymbols
            this.slice = { value: [1, 2, 3, 4, 5], to: 3 };
            //noinspection JSUnusedGlobalSymbols
            this.cleanAndCapitalised = { value: '_aNy_oLD_sTrInG_'};
            //noinspection JSUnusedGlobalSymbols
            this.reverse = { value: ['1', '2', '3', '4', '5']};

            /**************
             * Directives *
             **************/

                //noinspection JSUnusedGlobalSymbols
            this.password = { value: "pa33worD" };

            //noinspection JSUnusedGlobalSymbols
            this.uniqueUsername = {
                staticUsers: UserService.staticUsers(),
                value: "jimmy"
            };

            //noinspection JSUnusedGlobalSymbols
            this.characterCount = { value: "The quick brown fox jumps over the lazy dog" };

            //noinspection JSUnusedGlobalSymbols
            this.currencyInPence = { pence: "1999" };

            //noinspection JSUnusedGlobalSymbols
            this.ngMinMan = { value: 0 };

            //noinspection JSUnusedGlobalSymbols
            this.hasErrorTestForm = { value: "http://wwww" };

            /**************
             * Decorators *
             **************/

            this.errorHandler = { errors: TestErrorHandlingService.errors };

            this.triggerError = function () {
                UserService.throwError(TestErrorHandlingService.errors.length);
            };

            this.logDebug = function () {
                $log.debug("Logging Debug");
            };

            this.logInfo = function () {
                $log.info("Logging Info");
            };

            this.logWarn = function () {
                $log.warn("Logging Warn");
            };

            this.logError = function () {
                $log.error("Logging Error");
            };

            /****************
             * Interceptors *
             ****************/

            this.triggerHttpCall = function () {
                TestHttpService.getGoogle();
            };

            /**************
             * Basic Form *
             **************/
            this.basicFormSubmit = function () {
                $log.info('Basic form SUBMIT');
            };

            this.basicFormReset = function () {
                $log.info('Basic form RESET');
            };

            this.toggleFormDisable = function () {
                $log.info('Toggle form DISABLE');
            };

            this.basicForm = {
                textArea: ""
            };

        }]);
}());