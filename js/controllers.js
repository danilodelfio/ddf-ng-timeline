'use strict';

/* Controllers */
var angfy= angular.module('app.controllers', []);

// create the controller and inject Angular's $scope
	angfy.controller('mainController', function($scope, timelineService, userService) {    
        $scope.user = userService.getUser();
        $scope.timelineEntries = timelineService.getTimeline();
	});
