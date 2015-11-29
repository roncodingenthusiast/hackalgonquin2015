var myApp = angular.module('myApp', []);
myApp.directive("myMaps", [ function(){
	return{
		restrict:'E',
		template:'<div></div>',
		replace: true,
		link: function(scope, element, attrs){
			
			var myLatLng = new google.maps.LatLng(45.2843691, -75.732333);
			var myMarkers = [[45, -75], [56, -70], [58, -69]];
			var mapOptions = {
				center: myLatLng,
				zoom: 5,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);
			var infoWindow = new google.maps.InfoWindow();
			var marker, i;
			
			for(var i =0; i < myMarkers.length; i++){
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(myMarkers[i][0], myMarkers[i][1]), 
					map: map, 
					title: "hellow world!"+i
				});
				google.maps.event.addListener(marker, 'click', (function(marker, i){
					return function(){
						infoWindow.setContent("try");
						infoWindow.open(map, marker);
					}
				})(marker, i));
				marker.setMap(map);
			}
		}
	};
}] );