#!/usr/bin/env node

import minimist from 'minimist';

import moment from 'moment-timezone';

import fetch from 'node-fetch';

const args=minimist(process.argv.slice(2));



if (args.h)
{
console.log('Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE');
 console.log('   -h            Show this help message and exit.');
 console.log('   -n, -s        Latitude: N positive; S negative.');
  console.log('  -e, -w        Longitude: E positive; W negative.');
  console.log('  -z            Time zone: uses tz.guess() from moment-timezone by default.');
  console.log('  -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.');
  console.log('  -j            Echo pretty JSON from open-meteo API and exit.');
process.exit(0);
}

// Latitude
let latitude;
//option n and s
if(args.n)
{
latitude=parseFloat(args.n);
}
else if(args.s)
{
latitude=-parseFloat(args.n);
}


//Longitude 
let longitude;
//option e and w
if(args.e){
longitude=args.e;
}
else if(args.w)
{
longitude=-args.w;
}


//Timezone 
let timezone=moment.tz.guess();; 
//option z
if (args.z)
{
timezone=args.t;
}


//Fetch
// Make a request
//'.com?latitude=' + latitude + '&longitude=' + 
//const response = await fetch (args._[0]+'?'+args.d);
var response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude + '&timezone=' + timezone + '&daily=percipiation_hours');
// Get the data from the request
const data = await response.json();


//option j
//has to be logged after await according to autograder
if(args.j)
{
console.log(data);
}

//Create the response text using conditional statements.
const days = args.d ;

if (days == 0) {
  console.log("today.");
} else if (days > 1) {
  console.log("in " + days + " days.");
} else {
  console.log("tomorrow.");
}
if(data.daily){
         if(data.daily.precipitation_hours[day] >0){
            console.log("You might need your galoshes");
         }else{
             console.log("You will not need your galoshes");
         }
        }



