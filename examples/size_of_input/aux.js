const fs = require('fs');

// generate big array full of numbers
let data = [];

// lengths of the arrays
const len = [1000, 10000, 100000, 1000000];

for(let j = 0; j < len.length; j++) {

    let temp = Number.toString(len[j]);
    // create a string for the filename
    let filename = `./array_${len[j]}.json`;

    for(let i = 2; i < len[j]; i++) {
        data.push(i);
    }

    data.push(1);

    fs.writeFile(filename, JSON.stringify(data), 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

    // clear the data array
    data = [];
}
