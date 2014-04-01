'use strict';

var DEPENDENCIES = [
    'ngRoute',
    'hljs'
];


var MODULES = [
//    'myApp.filters',
//    'myApp.services',
//    'myApp.directives',
//    'myApp.controllers'
];

angular
    .module('myApp', [].concat(DEPENDENCIES).concat(MODULES))
    .config(function (hljsServiceProvider) {
        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
    });