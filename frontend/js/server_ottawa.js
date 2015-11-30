var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router_ottawa');
var request = require("request");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// for the limited number of places, ex)beaches, lawn-bowling, show every result.
// others, only show with distance setting, ex)5km of radius

app.get('/read-lawn-bowling', router.lawn_bowling); // NAME DONE, DISTANCE DONE
app.get('/read-beaches', router.beaches); // NAME DONE, DISTANCE DONE
app.get('/read-splash-pads', router.splash_pads); // NAME DONE, DISTANCE DONE
app.get('/read-outdoor-pools', router.outdoor_pools); // NAME DONE, DISTANCE DONE
app.get('/read-parks', router.parks); // NAME DONE, DISTANCE DONE
app.get('/read-tennis-courts', router.tennis_courts); // NAME DONE, DISTANCE DONE
app.get('/read-outdoor-rinks', router.outdoor_rinks); // NAME DONE, DISTANCE DONE
app.get('/read-volleyball-courts', router.volleyball_courts); // NAME DONE, DISTANCE DONE
app.get('/read-ball-diamonds', router.ball_diamonds); // NAME DONE, DISTANCE DONE
app.get('/read-sledding-hills', router.sledding_hills); // NAME DONE, DISTANCE DONE
app.get('/read-basketball-courts', router.basketball_courts); // NAME DONE, DISTANCE DONE, no give name for court, only size of court
app.get('/read-sports-fields', router.sports_fields); // NAME DONE, DISTACNCE DONE
app.get('/read-skateboard-parks', router.skateboard_parks) // NAME DONE, DISTANCE DONE
console.log("TEST TEST TEST");

app.listen(3000);