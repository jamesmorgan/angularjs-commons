(function () {
    "use strict";

    /**
     * A mock/test service
     */
    servicesModule.service('TestHttpService', function ($http, $q) {

        this.getGoogle = function () {
            $http.get("http://www.google.com");
        };

        this.getUrl = function (url) {
            $http.get(url);
        };

    });
}());