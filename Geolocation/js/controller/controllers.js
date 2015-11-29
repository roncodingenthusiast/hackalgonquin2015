myApp.controller('PhoneListCtrl', function ($scope, $http) {
    var jsonFile = 'js/data.json';
    $http.get(jsonFile)
    .then(function(res){
        $scope.stuff = res.data;
        console.log($scope.stuff.features[0].geometry.coordinates[0]);
    });
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

myApp.controller('LocationController', function($scope, $location){
  $scope.$;ocation = {};
  angular.forEach("protocol host path search hash".split(" "), funtion(method){
      $scope.$location[method] = function(){
          var result = $location[method].call($location);
          return angular.isObject(result) ? angular.toJson(result) : result;
      };
  });
});
myApp.config(function($locationProvider){
  $locationProvider.html5Mode(true).hashPrefix('!');
});