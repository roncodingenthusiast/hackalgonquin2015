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
<<<<<<< HEAD
        
        .when("/settings", {
            templateUrl: "partials/settings.html",
            controller: "PageCtrl"
        })
=======
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
>>>>>>> master
        // else 404
        .otherwise("/404", {
            templateUrl: "partials/404.html",
            controller: "PageCtrl"
        });
}]);

/**
 * Controls the Blog
 */
<<<<<<< HEAD
app.controller('navCtrl', function (fromServer /* $scope, $location, $http */ ) {
        var cityTemp = fromServer.getjSon();
        //console.log(fromServer.getjSon());
    })
    .controller('PageCtrl', function ($document, fromServer, generalFactory) {
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
    });

app.directive('activities', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/activities.html',
    };
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
            var promise = $http.get('js/test.json');

            promise.then(function (payload) {
                console.log(payload.data.currently.apparentTemperature);
                return payload.data.currently.temperature;
            });
        };

        service.getActivities = function (season) {
            return $http.get('js/weatherActivities.json');

            //console.log(payload.data.currently.apparentTemperature);
            //return payload.data.currently.temperature;
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
=======
app.controller('BlogCtrl', function ( /* $scope, $location, $http */ ) {
    console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */

app.controller('PageCtrl', function ($document, fromServer/* $scope, $location, $http */ ) {
    console.log("Page Controller reporting for duty.");
    console.log(":)");
    fromServer.getCurrentWeather('ba12221e9343fd78603b552feb4bcac1', '45.348391', '-75.757045?units=ca');
    
    //addEventListener('load', loadIt, false);
    /*
    (function loadIt() {
        var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            navHeightInPercentage = 55/clientHeight,
            
            fromTop = (clientHeight - navHeightInPercentage)/100,
            //fromTop = clientHeight - 55;
            el = document.getElementById("navIgation");
        
        console.log(clientHeight);
        
        console.log(fromTop);
        
        el.style.height = navHeightInPercentage + "%";
        el.style.top = fromTop + "%";
        // do something with el
    })()
    */
    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
});

app.factory('fromServer', function ($http) {
    var service = {};

    service.getCurrentWeather = function (APIKEY, LATITUDE, LONGITUDE) {
        var promise = $http.get('https://api.forecast.io/forecast/' + APIKEY + '/' + LATITUDE + ',' + LONGITUDE);
        
        promise.then(function (payload) {
            console.log(payload.hourly.data.temperature)
                //$scope.items = payload.data[storageName];
                //service.addItem(storageName, payload, 'fromServer');
        });
    }

    return service;
})
>>>>>>> master
