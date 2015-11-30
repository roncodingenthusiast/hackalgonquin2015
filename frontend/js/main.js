/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */

var app = angular.module('outAndAboutApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {
            templateUrl: "partials/home.html",
            controller: "PageCtrl"
        })
        // Pages
        .when("/about", {
            templateUrl: "partials/about.html",
            controller: "PageCtrl"
        })
        .when("/settings", {
            templateUrl: "partials/settings.html",
            controller: "PageCtrl"
        })
        // else 404
        .otherwise("/404", {
            templateUrl: "partials/404.html",
            controller: "PageCtrl"
        });
}]);

/**
 * Controls the Blog
 */
app.controller('navCtrl', function (fromServer /* $scope, $location, $http */ ) {
        var cityTemp = fromServer.getjSon();
        //console.log(fromServer.getjSon());
    })
    .controller('PageCtrl', function ($document, fromServer, generalFactory) {
        generalFactory.getCurrentSeason();
        fromServer.getjSon();

        // Activates Tooltips for Social Links
        $('.tooltip-social').tooltip({
            selector: "a[data-toggle=tooltip]"
        });
    })
    .controller('activitiesCtrl', function ($scope, fromServer, generalFactory) {
        var activities = $scope,
            season = generalFactory.getCurrentSeason(),
            promise = fromServer.getActivities();

        promise.then(function (payload) {
            switch (season) {
            case "Spring":
                $scope.activities = payload.data[season];
                break;
            case "Summer":
                $scope.activities = payload.data[season];
                break;
            case "Fall":
                $scope.activities = payload.data[season];
                break;
            case "Winter":
                $scope.activities = payload.data[season];
                break;
            }
        });
    })
    .controller('PhoneListCtrl', ['$rootScope', '$http', function ($scope, $http, $rootScope) {
        /*var jsonFile = 'js/data.json';
        $http.get(jsonFile)
        .then(function(res){
            $scope.stuff = res.data;
            console.log($scope.stuff.features[0].geometry.coordinates[0]);
        });*/
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                $scope.$apply(function () {
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

app.directive('activities', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/activities.html',
    };
});

app.factory('fromServer', function ($http) {
        var service = {};

        service.getCurrentWeather = function (coor) {
            var promise = $http.get('https://api.forecast.io/forecast/ba12221e9343fd78603b552feb4bcac1/' + LATITUDE + ',' + LONGITUDE + '?units=ca');

            promise.then(function (payload) {
                console.log(payload.hourly.data.temperature);
            });
        };

        service.getjSon = function () {
            var promise = $http.get('js/test.json');

            promise.then(function (payload) {
                console.log(payload.data.currently.apparentTemperature);
                return payload.data.currently.temperature;
            });
        };

        service.getActivities = function (season) {
            return $http.get('js/weatherActivities.json');
        };
        return service;
    })
    .factory('generalFactory', function ($rootScope) {
        var service = {};

        service.getCurrentSeason = function () {
            var today = new Date(),
                dd = today.getDate(),
                mm = today.getMonth() + 1, //January is 0!
                yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            today = mm + '/' + dd + '/' + yyyy;

            function between(x, min, max) {
                return x >= min && x <= max;
            }

            var season;
            if (between(mm, 03, 06)) {
                season = "Spring";
                console.log(1);
                //return season;                
            } else if (between(mm, 06, 09)) {
                season = "Summer";
                console.log(2);
                //return season;
            } else if (between(mm, 09, 12)) {
                data = "Fall";
                //console.log(3);
                //console.log(season);
                //return data;
            } else {
                season = "Winter";
                console.log(4);
                //return season;
            }
        };
        return service;
    });