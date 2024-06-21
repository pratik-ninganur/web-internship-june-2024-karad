const mysql = require('mysql');
const express = require('express');
const app = express();
const connectionString = { host : "localhost", 
                           port : 3306, 
                           database : "testdb", 
                           user: "root", 
                           password: "manager"}; 

//We will get data in request.body in JSON format due to below 
//middleware. It means request - stream will be converetd into 
//request.body in below middle ware call. 
app.use(express.json());

app.get("/users", (request, response)=>{
    var connection =  mysql.createConnection(connectionString);
    connection.connect();
    
    var queryText = "select * from Emp";

    connection.query(queryText, (err, result)=>{
        response.setHeader("Access-Control-Allow-Origin", "*")

        if(err==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(err));
            connection.end();
            response.end();
        }
    })
})

app.post("/users", (request, response)=>{
    var connection =  mysql.createConnection(connectionString);
    connection.connect();
    
    console.log(request.body)

    var queryText = `insert into Emp values(${request.body.No}, '${request.body.Name}', '${request.body.Address}')`;

    console.log(queryText);

    connection.query(queryText, (err, result)=>{
        response.setHeader("Access-Control-Allow-Origin", "*")

        if(err==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(err));
            connection.end();
            response.end();
        }
    })
})

app.put("/users", (request, response)=>{
    var connection =  mysql.createConnection(connectionString);
    connection.connect();
    
    var queryText = "select * from Emp";

    connection.query(queryText, (err, result)=>{
        response.setHeader("Access-Control-Allow-Origin", "*")

        if(err==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(err));
            connection.end();
            response.end();
        }
    })
})

app.delete("/users", (request, response)=>{
    var connection =  mysql.createConnection(connectionString);
    connection.connect();
    
    var queryText = "select * from Emp";

    connection.query(queryText, (err, result)=>{
        response.setHeader("Access-Control-Allow-Origin", "*")

        if(err==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(err));
            connection.end();
            response.end();
        }
    })
})


app.listen(9999, ()=>{console.log("server started..")});