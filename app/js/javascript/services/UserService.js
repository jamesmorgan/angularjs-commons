(function () {
    "use strict";

    /**
     * A mock/test service which is used to demonstrate various aspects of angular and the demonstrated tools
     */
    servicesModule.service('UserService', function ($q) {
        var STATIC_USERS = ["jimmy", "bobby", "admin"];

        this.checkUniqueUsername = function (username) {
            var deferred = $q.defer();
            deferred.resolve((STATIC_USERS.indexOf(username) !== -1));
            return deferred.promise;
        };

        this.staticUsers = function () {
            return STATIC_USERS;
        };

        this.throwError = function (count) {
            throw new Error(" TEST ERROR TRIGGERED \n Error count [" + count + "]");
        };

    });
})();