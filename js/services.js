'use strict';

/* Services */

var ngTimelineServices= angular.module('app.services', []);


ngTimelineServices.service('timelineService', function(){
  var timeline = [
    {"id": "0", "entry": {
                "glyphicon"     :  "glyphicon glyphicon-bell",
                "response"      :  "false",
                "title"     	:  "Mussum ipsum cacilds",
                "timeago"     	:  "1 hour",
                "text"     	    :  "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
            }},
    {"id": "1", "entry": {
                "glyphicon"     :  "glyphicon glyphicon-eye-open",
                "response"      :  "true",
                "title"     	:  "Mussum ipsum cacilds",
                "timeago"     	:  "2 hours",
                "text"     	    :  "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
            }},
    {"id": "2", "entry": {
                "glyphicon"     :  "glyphicon glyphicon-eye-open",
                "response"      :  "true",
                "title"     	:  "Mussum ipsum cacilds",
                "timeago"     	:  "3 days",
                "text"     	    :  "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
            }},
    {"id": "3", "entry": {
                "glyphicon"     :  "glyphicon glyphicon-bell",
                "response"      :  "false",
                "title"     	:  "Mussum ipsum cacilds",
                "timeago"     	:  "4 days",
                "text"     	    :  "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
            }}
  ];
  
  this.getTimeline = function(){
    return timeline;
  }
  
});

ngTimelineServices.service('userService', function(){
    
  var user = {
	"info" 	: {
		"nome"      :  "Danilo",
		"cognome"   :  "Del Fio",
        "ddn"     	:  "29/03/1973"
 	},
	"profile" : {
		"headerimg"       : "img/header-card.png",
		"personalimg"     : "img/avatar_personal.png"
	}
  }  
  
  this.getUser = function(){
    return user;
  }
  
});