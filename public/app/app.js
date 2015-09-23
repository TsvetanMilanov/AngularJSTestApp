/* angular */
var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/register', {
            templateUrl: '/partialViews/register',
            controller: 'RegisterController'
        })
        .when('/', {
            templateUrl: '/partialViews/home',
            controller: 'HomeController'
        });
});