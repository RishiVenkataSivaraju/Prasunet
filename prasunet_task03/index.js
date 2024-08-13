const express = require("express")
const app = express()
const ejs = require("ejs")
const path = require("path")
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'scripts')));

app.get("/",(req,res) =>{
res.render("home.ejs")
})

app.listen(8080,() =>{
console.log("Listening on port 8080")
})