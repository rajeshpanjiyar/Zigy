const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
require("dotenv").config()

//Database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology: true

}).then(()=>{
    console.log("Database CONNECTED")
}).catch(()=>{
    console.log("UNABLE to connect to Database")
})

//
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); 
app.use(bodyParser.urlencoded({extended: true})); 

//use parsing middleware
app.use(bodyParser.json())

//import the routes
const userRoutes = require("./routes/user")

// using routes
app.use('/api', userRoutes)



app.get("/", function(req, res){
    res.render("index", {name: {}, email: {}});
});

const port = process.env.PORT || 3000;

//starting a server
app.listen(port, ()=>{
    console.log(`App is running at ${port}`);
})

