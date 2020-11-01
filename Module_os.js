const os = require ('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(totalMemory)
console.log(freeMemory)

console.log(`Total Memory is ${totalMemory/1000000000} GB`)
console.log(`Free Memory is ${freeMemory/1000000000} GB`)