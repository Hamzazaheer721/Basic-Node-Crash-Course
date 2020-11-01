const EventEmitter = require('events');  //class
const emitter = new EventEmitter();    // object

// object.emit('triggered') to raise an event with name of the event triggered
// object.on('triggered') to listen the event named triggered which was raised

emitter.on ('message', (a)=>{
    console.log(a.name)
})

emitter.emit("message", {id : 1, name : "Hamza"});
