const express = require("express");
const port = 3000
const app = express();

app.get('/',function(req,res)
{
    res.send("Hello ritik i am talking from the internet");

})

app.listen(port)