const http =  require('http');
const mysql = require('mysql2');


const connectionString = { host : "localhost", 
                           port : 3306, 
                           database : "testdb", 
                           user: "root", 
                           password: "Da1775@231"}; 
var server = http.createServer((request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    if(request.url == "/users" && request.method=="GET")
    {
        var connection =  mysql.createConnection(connectionString);
        connection.connect();
        
        var queryText = "select * from users";
    
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
    }
    else if(request.url == "/users" && request.method=="POST")
    {
        console.log("Inside Post users: ");
        // var no = request.body.No;
        // var name = request.body.Name;
        // var address = request.body.Address;
        // += chunk.toString();
        let body = '';
       // let data='';

        // Collect data as it comes in
        request.on('data', (chunk) => {
            body += chunk.toString(); // Convert Buffer to string
            data = JSON.parse(body);
            console.log(data);
        

         
        
    
        var connection = mysql.createConnection(connectionString);
        connection.connect();
    
        let queryText = 
            `insert into users values(${data.No},'${data.Name}','${data.Address}')`;
    
        console.log(queryText);
        connection.query(queryText, (err, result)=>{
            response.setHeader("Content-Type", "application/json");
            if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();
            }
            else
            {
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }
        });
    });
    }
    else if(request.url == "/users" && request.method=="PUT")
    {
        console.log("PUT Call received from client");
        console.log("Update table.. like code to be executed here  on users table");
        response.write("some output of update query  on users table!");
        response.end();
    }
    else if(request.url == "/users" && request.method=="DELETE")
    {
        console.log("DELETE Call received from client");
        console.log("Delete from .. like code to be executed here  on users table");
        response.write("some output of delete query  on users table!");
        response.end();
    }
   else if(request.url == "/admin" && request.method=="GET")
    {
        console.log("SELECT Call received from client");
        console.log("Select from .. like code to be executed here  on admin table");
        response.write("some output of select query  on admin table!");
        response.end();
    }
    else
    {
        response.write("something else was called.");
        response.end();
    }
});

server.listen(9999, ()=>{console.log("Server started!")})