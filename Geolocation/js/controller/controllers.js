myApp.controller('PhoneListCtrl', ['$rootScope', '$http', function ($scope, $http, $rootScope) {
    /*var jsonFile = 'js/data.json';
    $http.get(jsonFile)
    .then(function(res){
        $scope.stuff = res.data;
        console.log($scope.stuff.features[0].geometry.coordinates[0]);
    });*/
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
    
}]);