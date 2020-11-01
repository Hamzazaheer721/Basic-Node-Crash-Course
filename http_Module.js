const http = require ("http");
// part 1
// const server = http.createServer();
//this server variable is EventEmitter which means it has on and emit property
// server.on('connection', socket => console.log("connected"))
// jshint http_Module.js is important command

//part 2
const server = http.createServer( (req,res) => {
    if( req.url === '/'){
        res.write("hello world")
        res.end();
    }
    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
})

server.listen(3030);
console.log("listening to port 3030");