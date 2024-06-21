const http =  require('http');
const cors = require("cors");
// console.log(http);


var server = http.createServer((request, response)=>{

    console.log("request received for" + request.url);

    //Return only JSON - from server.
    //Based on the JSON data returned - client javascript
    //will generate UI example XMLHTTPRequest
    if(request.url == "/users")
    {
        // response.setHeader("Content-Type", "text/plain");
        // response.write("some data");
        // response.end();
         var arr = [{"No": 1, "Name": "Mahesh", "Address" : "Pune"},
                   {"No": 2, "Name": "Nilesh", "Address" : "Pune"},
                   {"No": 3, "Name": "Amit", "Address" : "Pune"}];

        response.setHeader("Content-Type", "application/json");
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.write(JSON.stringify(arr));
        response.end();

    }
    //return hard coded HTML
    
    else if(request.url == "/home")
    {
        response.setHeader("Content-Type", "text/html");
        response.setHeader('Access-Control-Allow-Origin', "*")
        response.write(`<html>
                            <head>
                                <title>Demo Node</title>
                            </head>
                            <body>
                                <h1>Hi from Node Server</h1>
                            </body> 
                        </html>`);
        response.end();
    }
    //return HTML generated from Array / Data - Server side rendering
    //Means complete UI is generated on server side based on data
     else if(request.url == "/about")
    {
        response.setHeader("Content-Type", "text/html");
        response.setHeader('Access-Control-Allow-Origin', "*")
        var arr = [{"No": 1, "Name": "Mahesh", "Address" : "Pune"},
                   {"No": 2, "Name": "Nilesh", "Address" : "Pune"},
                   {"No": 3, "Name": "Amit", "Address" : "Pune"}];

        var tableUI = `<table border="1">`;

        for(let i = 0 ;i < arr.length ; i ++)
        {
            var user = arr[i];
            var row = `<tr>
                           <td>${user.No}</td> 
                           <td>${user.Name}</td> 
                           <td>${user.Address}</td> 
                       </tr> `;
            tableUI = tableUI + row;
        }
        tableUI = tableUI + `</table>`;
        response.write(`<html>
                            <head>
                                <title>Demo Node</title>
                            </head>
                            <body>
                                <h1>Hi from Node Server</h1>
                                ${tableUI}
                            </body>
                        </html>`);
        response.end();
    }
    //return Plain Text
    else
    {
        response.setHeader("Content-Type", "text/plain");
        response.write("some thing else was requested!");
        response.end();
    }
});
server.listen(9999, ()=>{console.log("Server started!")})