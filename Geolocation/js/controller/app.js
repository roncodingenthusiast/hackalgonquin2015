var myApp = angular.module('myApp', []);
myApp.directive("myMaps", function(){
	return{
		restrict:'E',
		template:'<div></div>',
		replace: true,
		link: function(scope, element, attrs){
			var myLatLng = new google.maps.LatLng(45.2843691, -75.732333);
			var myLatLng2 = new google.maps.LatLng(56.2843691, -70.732333);
			var mapOptions = {
				center: myLatLng,
				zoom: 5,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);
			var marker = new google.maps.Marker({
				position: myLatLng, 
				map: map, 
				title: "hello world!"
			});
			var marker2 = new google.maps.Marker({
				position: myLatLng2, 
				map: map, 
				title: "hello"
			});
			marker.setMap(map);
			marker2.setMap(map);
		}
	};
} );