phonecatApp.controller('PhoneListCtrl', function ($scope) {
  	if(navigator.geolocation){
    	navigator.geolocation.getCurrentPosition(function(position){
    			$scope.$apply(function(){
    			$scope.position = position;
        });
        console.log(position);
        console.log(position.coords.latitude);
        console.log(position.coords.longititude);
  		});

  	}
});