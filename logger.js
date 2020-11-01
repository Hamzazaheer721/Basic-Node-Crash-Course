const EventEmitter = require("events");


var url ="http:/mylogger.io/log"

class Logger extends EventEmitter {
    log_class = (message)=>{
        console.log(message)
        // it is supposed be raising event in Event_Module_ii
        this.emit("message", {id : 1, name : "Hamza"}); 
    }
}
const log = (message)=>{
    console.log(message)
}


// module.exports.log = log;
// module.exports = log;      //exporting as function without class
module.exports = Logger;
module.exports.endPoint = url;