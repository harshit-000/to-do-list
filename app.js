const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine" , "ejs");
let items = ["buy food","Eat Food","Watch Movie"];

app.get("/",function(req,res) {
  let today = new Date();
  let option = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day = today.toLocaleDateString("en-US",option);
  res.render("index",{kindOfDay:day,newListItem:items});
})

app.post("/",function(req,res) {
  items.push(req.body.work);
  res.redirect("/");
})

app.listen(3000,function() {
  console.log("Server running on port 3000");
})
