'use strict';

/**
 *
 */
servicesModule.service('UserService', function ($q) {
    var STATIC_USERS = ["jimmy", "bobby", "admin"];

    this.checkUniqueUsername = function (username) {
        var deferred = $q.defer();
        deferred.resolve((STATIC_USERS.indexOf(username) != -1));
        return deferred.promise;
    };

    this.staticUsers = function () {
        return STATIC_USERS;
    };

});