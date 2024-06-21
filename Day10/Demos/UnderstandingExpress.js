const express =  require('express');
const app =  express();

app.use(mymethod);

function mymethod(request, response, next)
{
    // request.stream => to be converted into => request.body
    response.write("1234");
    next();
}

app.use((request, response, next)=>{
    response.write("XYZ");
    //Check if username & password is correct then
    //next();
     response.end();
})
app.get("/users", (request, response)=>
{
    response.write("abcd")
    response.end();
})
app.listen(9999, ()=>{console.log("Server started...")})