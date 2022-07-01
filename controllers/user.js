const User = require("../models/user");
const { validationResult } = require("express-validator");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let name = []
let email = []
let count = 0;

const findData = async()=>{
  const result = await User.find();

   count++;

   name = []
   email = []

  for(let i = 0; i < result.length; i++){
    name.push(result[i].name)
    email.push(result[i].email)
  }
}

exports.add = (req, res) => {
 
  const user = new User(req.body);

  user.created_at = Date.now();

   findData();

  user.save((err, user) => {

      name.push(req.body.name)
      email.push(req.body.email)

      if(!err){ 
      res.render("index", { name: name, email: email });
      }else{
      res.render("index", { name: name, email: email });
        
      }
    
  });

};



//delete route
exports.del = (req, res) => {
  
  let myemail = req.body.email;
  let myname = req.body.name;

   User.deleteOne({ "email" : myemail, "name": myname }, function(err, obj) {
    findData();
    findData();
    findData();
    findData();
    findData();
   });

   


   if(count >= 1){
     count = 0;
    res.render("index", { name: name, email: email });
   }


};
