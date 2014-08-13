'use strict';

// create the module and name it ng-timeline
angular.module('ddf-ng-timeline', ['ngRoute', 'app.controllers', 'app.services', 'app.directives'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
            templateUrl : 'partials/main.html',
            controller  : 'mainController'});
  $routeProvider.when('/tmla', {
            templateUrl : 'partials/tmla.html',
            controller  : 'mainController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);