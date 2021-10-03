const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs')

// -------------------------------
app.get("/",function(req,res)
{
    res.render("home");
})

app.listen(3000, function()
{
    console.log("Server running at port 3000");
})