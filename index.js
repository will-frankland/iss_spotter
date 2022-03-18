// // ip test
// const request = require('request');
// const { calculateMac } = require('request/lib/hawk');
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTime } = require('./iss');

// // fetchMyIP((error, ip) => {
// //   if (error) {
// //     console.log("It didn't work!" , error);
// //     return;
// //   }

// //   console.log('It worked! Returned IP:' , ip);
// // });

// const printResults = (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   } if (data) {
//     console.log(data);
//   }
// };

// // To use real coordinates
// // fetchCoordsByIP("https://api.freegeoip.app/json/?apikey=8e70bc80-a640-11ec-813b-69d76b510c17", printResults);


// // fetchISSFlyOverTime(fetchCoordsByIP, (error, passTimes) => {
// //   if (error) {
// //     console.log("It didn't work!", error);
// //     return;
// //   }
// //   console.log("It worked! Returned flyover times:", passTimes);
// // });

// // To use simulated coordinates

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTime(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned flyover times:", passTimes);
// });



// Compass solution
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});