// This will require logger.js to be executed
const EventEmitter = require("events");
// const emitter = new EventEmitter();


// it is supposed to recive event
// emitter.on ('message', (a)=>{  
//     console.log(a.name)
// })
const Logger = require('./logger')
const logger = new Logger();

// it is supposed to recive event
logger.on ('message', (a)=>{  
    console.log(a.name)
})
logger.log_class("sent")