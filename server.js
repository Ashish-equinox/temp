// console.log('hello world');

/* console.log(global);

node server has global object instead of window object
window obj(present in browsers) */

/* const os = require('os');

console.log(os.type());

console.log(os.version());

console.log(os.homedir());
 */

/* const path = require('path');

console.log(__dirname); // address of folder for this file
console.log(__filename);

console.log(path.dirname(__filename));

console.log(path.basename(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename)); // parses  all file info in array

 */

// importing a custom library

const {add, subtract , mutiply , divide} = require('./math');

console.log(add(2,3));
console.log(subtract(2,3));
console.log(mutiply(2,3));
console.log(divide(2,3));
