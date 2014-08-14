'use strict';

/* Directives */

var ngTimelineDir= angular.module('app.directives', []);

ngTimelineDir.directive('ddfTimeline', function(){
      return {
        restrict: 'EA',
        scope: false,
        replace: 'true',
        template: '<ul class="timeline"><ddf-timeline-entry ng-repeat="feed in timelineEntries"></ddf-timeline-entry></ul>'
      }  
});

ngTimelineDir.directive( 'ddfTimelineEntry', function ( $compile ) {
  return {
    restrict: 'EA',
    replace: 'true',
    templateUrl: 'partials/timeLineEntry.html',
    link: function ( scope, element, attrs ) {
        if(attrs.response=='true') {
            element.addClass('timeline-inverted');
        }
    }
  }
});

ngTimelineDir.directive('ddfUserCard', function(){
      return {
        restrict: 'E',
        scope: false,
        replace: 'true',    
        templateUrl: 'partials/userCard.html'
      }
});
