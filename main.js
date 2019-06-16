'use strict';

const {pascalsTriange} = require('./pascals');

let rows;

if (process.argv.length >= 3) {
    rows = parseInt(process.argv[2], 10);
} else {
    throw new Error('The number of rows must be passed as an argument');
}

pascalsTriange(rows).forEach((row) => console.log(row));