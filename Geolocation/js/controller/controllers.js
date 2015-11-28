myApp.controller('PhoneListCtrl', function ($scope) {
  	if(navigator.geolocation){
    	navigator.geolocation.getCurrentPosition(function(position){
    			$scope.$apply(function(){
    			$scope.position = position;
        });
        console.log(position);
        $scope.latitude = position.coords.latitude;
        $scope.longititude = position.coords.longititude;
        console.log(position.coords.latitude);
        console.log(position.coords.longititude);
  		});

  	}
    
});