<h1>Angularify a beautiful timeline</h1>
<h3>Danilo Del Fio</h3> 

A few days ago I found a snippet of code that was for me. I needed to create a timeline that could handle the feed of a user and the responses of other users. 
After a lot of research, I finally found a snippet <a href="http://bootsnipp.com/sergiors/snippets/yGbV">Timeline</a>. Thank you to <a  href="http://bootsnipp.com/sergiors">Sergiors</a>. 
I wish, therefore, to find ways to make the timeline dynamics and to do this I helped our friend <strong>AngularJS</strong>.

I have created, therefore, a directive that used data from a service (easily editable through the call to $http or Restangular service for example) and that allowed me to manage the various types of entry required. 

So, I created two directives, in which one contained the other. The parent Directive:

'&lt;ul class="timeline"&gt;&lt;ddf-timeline-entry ng-repeat="feed in timelineEntries"&gt;&lt;/ddf-timeline-entry&gt;&lt;/ul&gt;'

This one contains the built-in directive <strong>ng-repeat</strong> for iterate our timeline entries and my directive <strong>ddf-timeline-entry</strong> that define the behaviour of every entry.

The <strong>ddf-timeline-entry</strong> is defined by a separated file named timelineEntry.html.

Enjoy
