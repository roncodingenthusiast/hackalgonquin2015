angular.module('outAndAboutApp', [])

.factory('fromServer', function () {
    var service = {};

    service.getCurrentWeather = function (APIKEY, LATITUDE, LONGITUDE) {
        var promise = $http.get('https://api.forecast.io/forecast/' + APIKEY + '/' + LATITUDE + ',' + LONGITUDE);
<<<<<<< HEAD

=======
        
>>>>>>> master
        promise.then(function (payload) {
            console.log(payload.hourly.data.temperature)
                //$scope.items = payload.data[storageName];
                //service.addItem(storageName, payload, 'fromServer');
        });
    }

    return service;
})