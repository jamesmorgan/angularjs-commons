'use strict';

/**
 *
 */
controllersModule.controller('MainCtrl', ['UserService', function (UserService) {

    //noinspection JSUnusedGlobalSymbols
    this.capitalised = { value : 'aNy oLD sTrInG'};
    //noinspection JSUnusedGlobalSymbols
    this.truncate = { value : 'Any Old String'};
    //noinspection JSUnusedGlobalSymbols
    this.toLower = { value : 'Any Old String'};
    //noinspection JSUnusedGlobalSymbols
    this.toUpper = { value : 'Any Old String'};
    //noinspection JSUnusedGlobalSymbols
    this.toCamel = { value : 'aNy-oLd-sTrInG'};
    //noinspection JSUnusedGlobalSymbols
    this.slice = { value : [1, 2, 3, 4, 5], to: 3 };
    //noinspection JSUnusedGlobalSymbols
    this.cleanAndCapitalised = { value : '_aNy_oLD_sTrInG_'};

    //noinspection JSUnusedGlobalSymbols
    this.password = { value : "pa33worD" };

    //noinspection JSUnusedGlobalSymbols
    this.uniqueUsername = {
        staticUsers : UserService.staticUsers(),
        value : "jimmy"
    };

    //noinspection JSUnusedGlobalSymbols
    this.characterCount = { value : "The quick brown fox jumps over the lazy dog" };

}]);