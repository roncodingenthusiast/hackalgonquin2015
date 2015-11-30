var express = require('express');
var request = require('request');
//var Geo = require('geo-nearby');
//var geohash = require('ngeohash');
var weather = require('weather-js');

// var current_location = new google.maps.LatLng(45.421530, -75.697193);
// var test_location = new google.map.LatLng(45.501689, -73.567256);
// var distance = google.maps.geometry.spherical.computeDistanceBetween(current_location, test_location);
// console.log("DISTANCE : ", distance(45.421530, -75.697193, 45.501689, -73.567256, 'K'));

function distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var radlon1 = Math.PI * lon1/180
    var radlon2 = Math.PI * lon2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
}

weather.find({search: 'Ottawa, CA', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
  var current_weather = result;
  current_temperature = current_weather[0].current.temperature;
  current_skytext = current_weather[0].current.skytext;
});

exports.lawn_bowling = function(err, res, next){    
    var url_lawn_bowling = "http://data.ottawa.ca/dataset/fb466db8-fb70-4d8b-8294-cd0c4c643340/resource/aa6f9df0-05bc-4f1c-bdd3-bce523e21802/download/2012-beaches.json";
    request(url_lawn_bowling, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            info.features[i].geometry.coordinates.push(info.features[i].properties.NAME);
            fields.push(info.features[i].geometry.coordinates);
        } 

        var lawn_bowling = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var lawn_bowling_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(lawn_bowling_distance < 15){
                lawn_bowling.push(fields[i]);                
                lawn_bowling[counter].push("" + (Math.floor(lawn_bowling_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }

        res.json({fields : fields, lawn_bowling : lawn_bowling});
      }
    })    
}

exports.beaches = function(err, res, next){    
    var url_beaches = "http://data.ottawa.ca/dataset/fb466db8-fb70-4d8b-8294-cd0c4c643340/resource/aa6f9df0-05bc-4f1c-bdd3-bce523e21802/download/2012-beaches.json";

    request(url_beaches, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            info.features[i].geometry.coordinates.push(info.features[i].properties.NAME);
            fields.push(info.features[i].geometry.coordinates);
        } 

        var beaches = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var beaches_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(beaches_distance < 15){
                beaches.push(fields[i]);                
                beaches[counter].push("" + (Math.floor(beaches_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }

        res.json({fields : fields, beaches : beaches});
      }
    })    
}

exports.splash_pads = function(err, res, next){    
    var url_splash_pads = "http://data.ottawa.ca/en/dataset/ee8596a5-4d08-4aca-8c6d-331c7c54cf51/resource/9853d99a-853e-4b6e-b078-0a667214923e/download/outdoor-pools.json";

    request(url_splash_pads, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            info.features[i].geometry.coordinates.push(info.features[i].properties.NAME);
            fields.push(info.features[i].geometry.coordinates);
        } 

        var splash_pads = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var splash_pads_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(splash_pads_distance < 15){
                splash_pads.push(fields[i]);                
                splash_pads[counter].push("" + (Math.floor(splash_pads_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }

        res.json({fields : fields, splash_pads : splash_pads});
      }
    })    
}

exports.outdoor_pools = function(err, res, next){    
    var url_outdoor_pools = "http://data.ottawa.ca/en/dataset/ee8596a5-4d08-4aca-8c6d-331c7c54cf51/resource/9853d99a-853e-4b6e-b078-0a667214923e/download/outdoor-pools.json";

    request(url_outdoor_pools, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            info.features[i].geometry.coordinates.push(info.features[i].properties.NAME);
            fields.push(info.features[i].geometry.coordinates);
        } 

        var outdoor_pools = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var outdoor_pools_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(outdoor_pools_distance < 15){
                outdoor_pools.push(fields[i]);                
                outdoor_pools[counter].push("" + (Math.floor(outdoor_pools_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }

        res.json({fields : fields, outdoor_pools : outdoor_pools});
      }
    })    
}

exports.parks = function(err, res, next){    
    var url_parks = "http://data.ottawa.ca/dataset/c6e1a245-f052-43fa-9f5d-8fe13ea79ac3/resource/cb2843ba-6069-49b9-b277-51f71ca3af95/download/parks.json";

    request(url_parks, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            if(info.features[i].geometry.type == "MultiPolygon"){
                info.features[i].geometry.coordinates[0][0][0].push(info.features[i].properties.NAME);
                fields.push(info.features[i].geometry.coordinates[0][0][0]);
            }
            else{
                info.features[i].geometry.coordinates[0][0].push(info.features[i].properties.NAME);
                fields.push(info.features[i].geometry.coordinates[0][0]);
            }
        } 

        var parks = [];
        // for(i = 0; i < 10; i++){
        //     parks.push(fields[Math.floor(Math.random()*(info.features.length))]);
        // }

        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var parks_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(parks_distance < 5){
                parks.push(fields[i]);                
                parks[counter].push("" + (Math.floor(parks_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }

        res.json({parks : parks});
      }
    })    
}

exports.tennis_courts = function(err, res, next){    
    var url_tennis_courts = "http://data.ottawa.ca/dataset/578b6e0f-e0c6-4037-ae8e-45e0318a984d/resource/3fe90df5-fb50-47e3-a642-2553c4d1bad5/download/tennis-courts.json";

    request(url_tennis_courts, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            var tennis_court = info.features[i].properties.CLUB + "(" + info.features[i].properties.COURT_TYPE + ")"
            info.features[i].geometry.coordinates.push(tennis_court);          
            fields.push(info.features[i].geometry.coordinates);
        } 

        var tennis_courts = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var tennis_courts_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(tennis_courts_distance < 5){
                tennis_courts.push(fields[i]);                
                tennis_courts[counter].push("" + (Math.floor(tennis_courts_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }

        res.json({fields : fields, tennis_courts : tennis_courts});
      }
    })    
}

exports.outdoor_rinks = function(err, res, next){    
    var url_outdoor_rinks = "http://data.ottawa.ca/dataset/3a19f905-e0fb-4afb-81fe-aff54a08b268/resource/dff7eb5c-3392-47d3-a6a4-4440ccdc0b77/download/outdoor-rinks.json";

    request(url_outdoor_rinks, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            info.features[i].geometry.coordinates.push(info.features[i].properties.MAJOR_CROS);
            fields.push(info.features[i].geometry.coordinates);
        } 

        var outdoor_rinks = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var outdoor_rinks_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(outdoor_rinks_distance < 5){
                outdoor_rinks.push(fields[i]);                
                outdoor_rinks[counter].push("" + (Math.floor(outdoor_rinks_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }

        res.json({fields : fields, outdoor_rinks : outdoor_rinks});
      }
    })    
}

exports.volleyball_courts = function(err, res, next){    
    var url_volleyball_courts = "http://data.ottawa.ca/dataset/401dfd09-ea0a-4864-a015-87af39ffc8da/resource/0fbea1f1-a91b-4f76-b9c8-e82aa1cf3375/download/volleyball-courts.json";
    
    request(url_volleyball_courts, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            var no_volleyball_courts = info.features[i].properties.NO_COURTS;
            var surface_volleyball_courts = info.features[i].properties.SURFACE_TY
            info.features[i].geometry.coordinates.push(no_volleyball_courts);
            info.features[i].geometry.coordinates.push(surface_volleyball_courts);
            fields.push(info.features[i].geometry.coordinates);
        } 

        var volleyball_courts = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var volleyball_courts_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(volleyball_courts_distance < 7){
                volleyball_courts.push(fields[i]);                
                volleyball_courts[counter].push("" + (Math.floor(volleyball_courts_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }

        res.json({fields : fields, volleyball_courts : volleyball_courts});
      }
    })    
}

exports.ball_diamonds = function(err, res, next){    
    var url_ball_diamonds = "http://data.ottawa.ca/dataset/cad648df-85d9-45e9-a573-914dc7c00b74/resource/fcc7bdf7-dc8b-4396-be5b-db3e2dab41d3/download/ball-diamonds.json";
    request(url_ball_diamonds, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            var ball_diamond_type = info.features[i].properties.FIELD_NAME + "(" + info.features[i].properties.DIAMOND_TY + ")";
            info.features[i].geometry.coordinates.push(ball_diamond_type);
            fields.push(info.features[i].geometry.coordinates);
        } 

        var ball_diamonds = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var ball_diamonds_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(ball_diamonds_distance < 5){
                ball_diamonds.push(fields[i]);                
                ball_diamonds[counter].push("" + (Math.floor(ball_diamonds_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }
        res.json({fields : fields, ball_diamonds : ball_diamonds});
      }
    })    
}

exports.sledding_hills = function(err, res, next){    
    var url_sledding_hills = "http://data.ottawa.ca/dataset/cc6164e7-e192-43f2-ab4f-1e9702c43cf4/resource/b98254d1-c713-44b7-b46a-6fac16975f4e/download/sledding-hills.json";
   
    
    request(url_sledding_hills, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            info.features[i].geometry.coordinates.push(info.features[i].properties.ADDRESS);
            info.features[i].geometry.coordinates.push(info.features[i].properties.OBSERVATIO);
            fields.push(info.features[i].geometry.coordinates);
        } 

        var sledding_hills = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var sledding_hills_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(sledding_hills_distance < 5){
                sledding_hills.push(fields[i]);                
                sledding_hills[counter].push("" + (Math.floor(sledding_hills_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }

        res.json({fields : fields, sledding_hills : sledding_hills});
      }
    })    
}

exports.basketball_courts = function(err, res, next){    
    var url_basketball_courts = "http://data.ottawa.ca/dataset/859ab3c4-c68c-4bf2-8ba1-1d7f3fe569e1/resource/6b31ac68-f27d-4b78-9eba-6f54adfe9999/download/basketball-courts.json";
   
    
    request(url_basketball_courts, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            info.features[i].geometry.coordinates.push(info.features[i].properties.NAME);
            fields.push(info.features[i].geometry.coordinates);
        } 

        var basketball_courts = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var basketball_courts_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(basketball_courts_distance < 5){
                basketball_courts.push(fields[i]);                
                basketball_courts[counter].push("" + (Math.floor(basketball_courts_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }

        res.json({fields : fields, basketball_courts : basketball_courts});
      }
    })    
}

exports.sports_fields = function(err, res, next){    
	var url_sports_fields = "http://data.ottawa.ca/dataset/afdfcd85-7cff-45a8-94a5-6f74fd6e3498/resource/53f1635e-beb9-4cef-bfc4-4ab36898b3f7/download/sports-fields.json";
    //var places = proximity.addSet('places');
    
	request(url_sports_fields, function(err, request_res, body){        
		if (!err && res.statusCode == 200) {    	
    	var info = JSON.parse(body);    	
    	//console.log("INFO : ", info.features);
    	console.log("HOW MANY FIELDS?", info.features.length);
    	console.log("FIRST GEO TYPE", info.features[0].geometry.type);
    	console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

    	var fields = [];
        for(i = 0; i < info.features.length; i++){
            var sports_field = info.features[i].properties.FIELD_NAME + "(" + info.features[i].properties.REGULAR_US + ")";
            info.features[i].geometry.coordinates.push(sports_field);
            fields.push(info.features[i].geometry.coordinates);
        }  

        var sports_fields = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var sports_fields_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            if(sports_fields_distance < 5){
                sports_fields.push(fields[i]);                
                sports_fields[counter].push("" + (Math.floor(sports_fields_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }

        res.json({fields : fields, sports_fields : sports_fields});
	  }
	})    
}

exports.skateboard_parks = function(err, res, next){    
    var url_skateboard_parks = "http://data.ottawa.ca/dataset/56cddd50-77fc-4adb-afb8-77c63f62c3ed/resource/7cadd110-c759-47d7-ba51-aa320b227916/download/skateboard-parks.json";
   
    
    request(url_skateboard_parks, function(err, request_res, body){        
        if (!err && res.statusCode == 200) {        
        var info = JSON.parse(body);        
        //console.log("INFO : ", info.features);
        console.log("HOW MANY FIELDS?", info.features.length);
        console.log("FIRST GEO TYPE", info.features[0].geometry.type);
        console.log("FIRST GEO COORD", info.features[0].geometry.coordinates);

        var fields = [];
        for(i = 0; i < info.features.length; i++){
            info.features[i].geometry.coordinates.push(info.features[i].properties.NAME);
            fields.push(info.features[i].geometry.coordinates);
        } 

        var skateboard_parks = [];
        var counter = 0;
        for(i = 0; i < info.features.length; i++){
            var skateboard_parks_distance = distance(45.421530, -75.697193, fields[i][1], fields[i][0], 'K');
            // Can I make variable parameter for distance by reactive URL parameter by AngulurJS
            if(skateboard_parks_distance < 15){
                skateboard_parks.push(fields[i]);                
                skateboard_parks[counter].push("" + (Math.floor(skateboard_parks_distance*10))/10 + "KM");
                counter++;                  
            }
            if(counter > 9)
                break;            
        }
        res.json({fields : fields, skateboard_parks : skateboard_parks});
      }
    })    
}