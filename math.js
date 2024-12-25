// method-1 to export a file to server.js

/* const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const mutiply = (a,b) => a*b;
const divide = (a,b) => a/b;

module.exports = {add, subtract , mutiply , divide}; */


// method-2 to export a file to server.js

exports.add = (a,b) => a+b;
exports.subtract = (a,b) => a-b;
exports.mutiply = (a,b) => a*b;
exports.divide = (a,b) => a/b;