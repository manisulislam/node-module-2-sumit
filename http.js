const { Socket } = require("dgram");
const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
    res.write("hello progarmme");
    res.write("first node js sever");
    res.end();

    }
    else if(req.url==='/about'){
        res.write("this is about page");
        res.end();
    }
    else{
        res.write("not found");
        res.end();
    }
    
});
// akane server hocce akata emmier



server.listen(3000);
console.log(`server is runnig on 3000 port`);