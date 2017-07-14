const now = require('performance-now');
require('console.table');

let results = [];

const arr_1000 = require('./array_1000');
const arr_10000 = require('./array_10000');
const arr_100000 = require('./array_100000');
const arr_1000000 = require('./array_1000000');

const arrays = [arr_1000, arr_10000, arr_100000, arr_1000000];
const sizes = [1000, 10000, 100000, 1000000];
const times = [];

for(let i = 0; i < arrays.length; i++) {

    // perform the linear search
    let start = now();
        doLinearSearch(arrays[i], 1);
    let end = now();

    // get the times
    let time = (end-start).toFixed(3);
    times.push(time);

    // calculate the time increase
    let time_increase = "N/A";
    if(i !== 0) {
        time_increase = ( (times[i] - times[i - 1])/(times[i - 1]) * 100 ).toFixed(2);
    }

    let s_increase = (i === 0) ? "N/A" : "1000%";
    
    // generate the result object
    let temp = {
        size: sizes[i],
        size_incease: s_increase,
        time: time,
        time_increase: ( i === 0 ) ? "N/A" : time_increase + "%"
    };

    // push to the result object for displaying
    results.push(temp);

}

console.log('\n\n');

console.table(results);


function doLinearSearch(array, targetValue) {
  for (var guess = 0; guess < array.length; guess++) {
    if (array[guess] === targetValue) { 
        return guess;  // found it!
    }
  }
  return -1;  // didn't find it
};