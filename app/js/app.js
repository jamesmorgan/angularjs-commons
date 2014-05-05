'use strict';

var DEPENDENCIES = [
    'ngRoute',
    'hljs'
];

var MODULES = [
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'myApp.errorHandler',
    'myApp.logger',
    'myApp.httpDecorator'
];

var myApp = angular.module('myApp', [].concat(DEPENDENCIES).concat(MODULES));

myApp.config(function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
        // replace tab with 4 spaces
        tabReplace: '    '
    });
});

// This sets up the default http interceptor for the project
myApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('LoggingHttpInterceptor');
});

var configModule = angular.module('myApp.config', []);
var filtersModule = angular.module('myApp.filters', []);
var servicesModule = angular.module('myApp.services', []);
var directivesModule = angular.module('myApp.directives', ['myApp.config']);
var controllersModule = angular.module('myApp.controllers', []);
var errorHandler = angular.module('myApp.errorHandler', []);
var dateTimeLogger = angular.module('myApp.logger', []);
var loggingHttpInterceptor = angular.module('myApp.httpDecorator', []);
