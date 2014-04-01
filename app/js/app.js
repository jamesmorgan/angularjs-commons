filtersModule
var DEPENDENCIES = [
    'ngRoute',
    'hljs'
];

var MODULES = [
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
];

var myApp = angular.module('myApp', [].concat(DEPENDENCIES).concat(MODULES));

myApp.config(function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
        // replace tab with 4 spaces
        tabReplace: '    '
    });
});

var filtersModule = angular.module('myApp.filters', []);
var servicesModule = angular.module('myApp.services', []);
var directivesModule = angular.module('myApp.directives', []);
var controllersModule = angular.module('myApp.controllers', []);
