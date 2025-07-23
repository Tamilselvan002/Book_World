const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3306;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static("public"));

const handlebars = exphbs.create({extname:".hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine", "hbs");



//router

const routs = require("./server/routs/books");
app.use('/',routs)


app.listen(port,()=>{
    console.log("Listining port : " +port);
})
