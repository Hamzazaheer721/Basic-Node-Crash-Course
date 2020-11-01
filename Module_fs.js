const fs = require ('fs')

const files = fs.readdirSync('./')        //Synchronous
console.log(`Sync Result  : ${files}`)

fs.readdir( './', (err,files) =>{         //Asynchronous
    if(err) console.log('Error: ', err);
    else console.log(`Async Result : ${files}`)
})