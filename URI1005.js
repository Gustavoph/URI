const { Console } = require('console');

let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let media = ((A * 3.5) + (B * 7.5)) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);