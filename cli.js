#!/usr/bin/env node
import moment from 'moment-timezone';

import minimist from 'minimist';

import fetch from 'node-fetch';

const args=minimist(process.argv.slice(2));

console.log(args)

const timezone = moment.tz.guess()

if (argv.h==true)
{
console.log('Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE
    -h            Show this help message and exit.
    -n, -s        Latitude: N positive; S negative.
    -e, -w        Longitude: E positive; W negative.
    -z            Time zone: uses tz.guess() from moment-timezone by default.
    -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.
    -j            Echo pretty JSON from open-meteo API and exit.
')
}
const url= ('https://api.open-meteo.com/v1/forecast?latitude=35.875&longitude=-79&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours&current_weather=true&timezone=America%2FNew_York');


//fetch 
// Make a request
//'.com?latitude=' + latitude + '&longitude=' + 
const response = await fetch(https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + &hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours&current_weather=true&timezone=America%2FNew_York');
// Get the data from the request
const data = await response.json();




//Create the response text using conditional statements.
const days = args.d 

if (days == 0) {
  console.log("today.")
} else if (days > 1) {
  console.log("in " + days + " days.")
} else {
  console.log("tomorrow.")
}


