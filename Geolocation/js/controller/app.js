var myApp = angular.module('myApp', []);
myApp.directive("myMaps", [ function(){
	return{
		restrict:'E',
		template:'<div></div>',
		replace: true,
		link: function(scope, element, attrs){
			
			var myLatLng = new google.maps.LatLng(45.2843691, -75.732333);
			//var myLatLng2 = new google.maps.LatLng(56.2843691, -70.732333);
			var myMarkers = [[45, -75], [56, -70]];
			var mapOptions = {
				center: myLatLng,
				zoom: 5,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);
			var infoWindow = new google.maps.InfoWindow();
			var marker, i;
			
			for(var i =0; i < myMarkers.length; i++){
				console.log('my markers are seen'+myMarkers[i][0]);
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(myMarkers[i][0], myMarkers[i][1]), 
					map: map, 
					title: "hellow world!"+i
				});
				marker.setMap(map);
			}
			var marker = new google.maps.Marker({
				position: myLatLng, 
				map: map, 
				title: "hello world!"
			});

			marker.setMap(map);
		}
	};
}] );