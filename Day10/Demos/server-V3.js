const express = require('express');
// console.log(express);

const app = express();

app.get("/users", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.write("GET received for /users");
    response.end();
})

app.post("/users", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*")
 response.write("POST received for /users");
 response.end();
})

app.put("/users", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*")
 response.write("PUT received for /users");
 response.end();
})

app.delete("/users", (request, response)=>{
 response.write("DELETE received for /users");
 response.end();
})


app.get("/admin", (request, response)=>{
     response.write("GET received for /admin");
     response.end();
})

app.listen(9999, ()=>{console.log("server started..")});