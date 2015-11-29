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