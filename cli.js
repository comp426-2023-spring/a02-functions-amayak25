#!/usr/bin/env node
import moment from 'moment-timezone';

import minimist from 'minimist';

import fetch from 'node-fetch';

const args=minimist(process.argv.slice(2));

console.log(args)

if (args.h)
{
console.log('Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE);
 console.log('   -h            Show this help message and exit.');
 console.log('   -n, -s        Latitude: N positive; S negative.');
  console.log('  -e, -w        Longitude: E positive; W negative.');
  console.log('  -z            Time zone: uses tz.guess() from moment-timezone by default.');
  console.log('  -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.);
  console.log('  -j            Echo pretty JSON from open-meteo API and exit.');

}
//const url= ('https://api.open-meteo.com/v1/forecast?latitude=35.875&longitude=-79&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours&current_weather=true&timezone=America%2FNew_York');




console.log(data)
// Latitude
let Latitude;
//Longitude 
let Longitude;
//option n and s
if(args.n)
{
Latitude=args.n;
}
if(args.s)
{
Latitude=-args.s;
}
//option e and w
if(args.e){
Longitude=args.e;
}
if(args.w)
{
Longitude=-args.w)
}
//option z
if (args.z)
{
timezone=args.t;
}
else{
let timezone = moment.tz.guess()
}
//option j
if(args.j)
{
console.log(data);
}
//Fetch
// Make a request
//'.com?latitude=' + latitude + '&longitude=' + 
//const response = await fetch (args._[0]+'?'+args.d);
const response = await fetch(https://api.open-meteo.com/v1/forecast?latitude=' + Latitude + '&longitude=' + Longitude + '&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours&current_weather=true&timezone=' + timezone);
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
if(data.daily){
         if(data.daily.precipitation_hours[day] >0){
            console.log("You might need your galoshes");
         }else{
             console.log("You will not need your galoshes");
         }
        }



