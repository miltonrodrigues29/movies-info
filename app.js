const express = require('express')
const app = express()
const imdb = require('imdb-api')

app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')

// -------------------------------
app.get("/",function(req,res)
{
    res.render("home");
})

// imdb.get({name: 'The Toxic Avenger'}, {apiKey: 'foo', timeout: 30000}).then(console.log).catch(console.log);


app.listen(3000, function()
{
    console.log("Server running at port 3000");
})