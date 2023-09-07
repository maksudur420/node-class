const http = require('http');
const port =3000;
const hostname = '127.0.0.1'
const myServer = http.createServer((req,res)=>{
    res.writeHead(202,{'content-type':'text/html'})
    res.write("<h1>hell World!! I am your server</h1>");
    res.end()
});

myServer.listen(port,hostname,()=>{
    console.log(`server is succesfullly runnin in this address http://${hostname}:${port}`)
})
