const jsonServer = require("json-server"); 
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT =  8000; 

server.use(middlewares);
server.use(router);

server.listen(PORT, ()=>{
    console.log('server is running on port', PORT);
})
