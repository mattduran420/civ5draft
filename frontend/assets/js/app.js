'use strict';
var includes = [
    'ngRoute',
    'angularProject.services',
    'angularProject.directives',
    'angularProject.controllers',
    ]

angular.module('angularProject', includes).
config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'home'});
    $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'settings'});
    $routeProvider.when('/draft', {templateUrl: 'partials/draft.html', controller: 'draft'});
    $routeProvider.otherwise({redirectTo: '/'});
}])