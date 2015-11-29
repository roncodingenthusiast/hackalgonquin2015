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
        .when("/faq", {
            templateUrl: "partials/faq.html",
            controller: "PageCtrl"
        })
        .when("/pricing", {
            templateUrl: "partials/pricing.html",
            controller: "PageCtrl"
        })
        .when("/services", {
            templateUrl: "partials/services.html",
            controller: "PageCtrl"
        })
        .when("/contact", {
            templateUrl: "partials/contact.html",
            controller: "PageCtrl"
        })
        // Blog
        .when("/blog", {
            templateUrl: "partials/blog.html",
            controller: "BlogCtrl"
        })
        .when("/blog/post", {
            templateUrl: "partials/blog_item.html",
            controller: "BlogCtrl"
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
});

/**
 * Controls all other Pages
 */

app.controller('PageCtrl', function ($document, fromServer, generalFactory) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            //$scope.$apply(function(){
            //$scope.position = position;
            console.log(position);
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        });
    }

    console.log("Page Controller reporting for duty.");
    // https://api.forecast.io/forecast/ba12221e9343fd78603b552feb4bcac1/45.3507329,-75.76946629999999
    generalFactory.getCurrentSeason();
    fromServer.getjSon();

    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    });
})
.controller('activitiesCtrl', function ($scope, fromServer){
    var activities = this;
    
    $scope.a
    //fromServer.getjSon();
});

app.factory('fromServer', function ($http) {
        var service = {};

        service.getCurrentWeather = function (APIKEY, LATITUDE, LONGITUDE) {
            var promise = $http.get('https://api.forecast.io/forecast/ba12221e9343fd78603b552feb4bcac1/' + LATITUDE + ',' + LONGITUDE + '?units=ca');

            promise.then(function (payload) {
                console.log(payload.hourly.data.temperature);
                //$scope.items = payload.data[storageName];
                //service.addItem(storageName, payload, 'fromServer');
            });
        };

        service.getjSon = function () {
            var promise = $http.get('../nowApp/js/test.json');

            promise.then(function (payload) {
                console.log(payload.data.currently.apparentTemperature);
                return payload.data.currently.temperature;                
            });
        };
        return service;
    })
    .factory('generalFactory', function () {
        var service = {};

        service.getCurrentSeason = function (returnThis) {
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
            if (between(mm, 03, 06)) {
                console.log("Spring");
            } else if (between(mm, 06, 09)) {
                console.log("Summer");
            } else if (between(mm, 09, 12)) {
                console.log("Fall");
            } else {
                console.log("Winter");
            }
        }

        service.getActivities = function (season, currentWeather) {

        };
        return service;
    });