/* angular */
var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/messages', {
            templateUrl: '/partialViews/allMessages',
            controller: 'MessagesController'
        })
        .when('/uploadPicture', {
            templateUrl: '/partialViews/uploadPicture'
        })
        .when('/addMessage', {
            templateUrl: '/partialViews/addMessage',
            controller: 'AddMessageController'
        })
        .when('/register', {
            templateUrl: '/partialViews/register',
            controller: 'RegisterController'
        })
        .when('/', {
            templateUrl: '/partialViews/home',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
});